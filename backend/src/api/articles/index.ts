import { Hono } from "hono";
import { Bindings } from "../../binding";
import {
  reactionsService,
  urlReactionsService,
  urlsService,
} from "../../services";
import { drizzle } from "drizzle-orm/d1";
import { OGPHandler } from "../../utils/OGPHandler";

const nonNullable = <T>(value: T): value is NonNullable<T> => value != null;

const articlesRoute = new Hono<{ Bindings: Bindings }>();

articlesRoute.get("/", async (c) => {
  const db = drizzle(c.env.DB);
  const articles = await urlReactionsService.selectUrlReactions(db);
  const urlIds = articles.map((article) => article.urlId);
  const reactionIds = articles.map((article) => article.reactionId);
  const urls = await urlsService.selectUrls(db, urlIds);
  const reactions = await reactionsService.selectReactions(db, reactionIds);

  const asyncResult = articles.map(async (article) => {
    const url = urls.find((url) => url.id === article.urlId);
    const reaction = reactions.find(
      (reaction) => reaction.id === article.reactionId,
    );

    if (!url || !reaction) {
      return;
    }

    const siteResponse = await fetch(url?.url);

    if (!siteResponse.ok) {
      return;
    }

    const ogp = new OGPHandler();
    const res = new HTMLRewriter().on("meta", ogp).transform(siteResponse);
    await res.text();

    return {
      url: url?.url,
      title: ogp?.ogpTitle ?? "",
      imageUrl: ogp?.ogpImageUrl ?? "",
      reaction: reaction?.type,
      count: article.count,
    };
  });

  const result = (await Promise.all(asyncResult))
    .filter(nonNullable)
    .toSorted((a, b) => b.count - a.count);
  c.header("Cache-Control", "public, s-maxage=10");
  return c.json({ data: result });
});

export { articlesRoute };

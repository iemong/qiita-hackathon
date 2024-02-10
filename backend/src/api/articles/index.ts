import { Hono } from "hono";
import { Bindings } from "../../binding";
import {
  reactionsService,
  urlReactionsService,
  urlsService,
} from "../../services";
import { drizzle } from "drizzle-orm/d1";

const articlesRoute = new Hono<{ Bindings: Bindings }>();

articlesRoute.get("/", async (c) => {
  const db = drizzle(c.env.DB);
  const articles = await urlReactionsService.selectUrlReactions(db);
  const urlIds = articles.map((article) => article.urlId);
  const reactionIds = articles.map((article) => article.reactionId);
  const urls = await urlsService.selectUrls(db, urlIds);
  const reactions = await reactionsService.selectReactions(db, reactionIds);

  const result = articles
    .map((article) => {
      const url = urls.find((url) => url.id === article.urlId);
      const reaction = reactions.find(
        (reaction) => reaction.id === article.reactionId,
      );
      return {
        url: url?.url,
        reaction: reaction?.type,
        count: article.count,
      };
    })
    .toSorted((a, b) => b.count - a.count);
  return c.json({ data: result });
});

export { articlesRoute };

import { Hono } from "hono";
import { Bindings } from "../../binding";
import {
  urlsService,
  reactionsService,
  urlReactionsService,
} from "../../services";
import { drizzle } from "drizzle-orm/d1";

const registerRoute = new Hono<{ Bindings: Bindings }>();

registerRoute.post("/", async (c) => {
  const data: { message: string; reaction: string } = await c.req.json();
  const { message: url, reaction } = data;

  const db = drizzle(c.env.DB);
  const u =
    (await urlsService.findUrl(db, url)) ??
    (await urlsService.insertUrl(db, url));
  const r =
    (await reactionsService.findReaction(db, reaction)) ??
    (await reactionsService.insertReaction(db, reaction));

  const urlReaction = await urlReactionsService.findUrlReaction(db, {
    urlId: u.id,
    reactionId: r.id,
  });
  if (urlReaction) {
    await urlReactionsService.incrementUrlReaction(db, {
      urlId: u.id,
      reactionId: r.id,
    });
  } else {
    await urlReactionsService.insertUrlReaction(db, {
      reactionId: r.id,
      urlId: u.id,
    });
  }

  return c.body("ok", 200);
});

registerRoute.get("/", async (c) => {
  return await c.req.json();
});

export { registerRoute };

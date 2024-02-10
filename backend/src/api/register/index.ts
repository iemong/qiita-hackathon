import { Hono } from "hono";
import { Bindings } from "../../binding";
import { reactionsService } from "../../services";

const registerRoute = new Hono<{ Bindings: Bindings }>();

type Request = {
  url: string;
  reaction: string;
};
registerRoute.post("/", async (c) => {
  const data = await c.req.json();
  // await reactionsService.insertReaction(c, {
  //   type: "hoge",
  // });
  return c.json({ data });
});

registerRoute.get("/", async (c) => {
  const reactions = await reactionsService.selectReactions(c);
  return c.json({ reactions });
});

export { registerRoute };

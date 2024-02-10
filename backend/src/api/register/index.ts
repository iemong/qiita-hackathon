import { Hono } from "hono";
import { Bindings } from "../../binding";

const registerRoute = new Hono<{ Bindings: Bindings }>();

type Request = {
  url: string;
  reaction: string;
};
registerRoute.post("/", async (c) => {
  const data = await c.req.json();
  return c.json({ data });
});

export { registerRoute };

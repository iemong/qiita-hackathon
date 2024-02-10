import { Hono } from "hono";
import { showRoutes } from "hono/dev";
import { logger } from "hono/logger";
import { Bindings } from "./binding";
import { reactionsRoute } from "./reactions";

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", logger());

app.route("/api/reactions", reactionsRoute);

export default app;

showRoutes(app);

import { Hono } from "hono";
import { showRoutes } from "hono/dev";
import { logger } from "hono/logger";
import { Bindings } from "./binding";
import { registerRoute } from "./api/register";

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", logger());

app.route("/api/register", registerRoute);

export default app;

showRoutes(app);

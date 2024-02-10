import { Hono } from "hono";
import { showRoutes } from "hono/dev";
import { logger } from "hono/logger";
import { Bindings } from "./binding";
import { articlesRoute, registerRoute } from "./api";

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", logger());

app.route("/api/register", registerRoute);
app.route("/api/articles", articlesRoute);

export default app;

showRoutes(app);

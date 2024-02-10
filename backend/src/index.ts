import { Hono } from "hono";
import { showRoutes } from "hono/dev";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { Bindings } from "./binding";
import { articlesRoute, registerRoute } from "./api";

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", logger());
app.use(
  "/api/*",
  cors({
    origin: [
      "http://localhost:3000",
      "https://qiita-hackathon.pages.dev",
      "https://qiita.com",
    ],
  }),
);

app.route("/api/register", registerRoute);
app.route("/api/articles", articlesRoute);

export default app;

showRoutes(app);

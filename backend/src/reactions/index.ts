import { Hono } from "hono";
import { Bindings } from "../binding";

const reactionsRoute = new Hono<{ Bindings: Bindings }>();



export { reactionsRoute };

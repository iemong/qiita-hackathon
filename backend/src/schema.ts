import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const urls = sqliteTable("urls", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  url: text("url").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).notNull(),
});

export const insertUrlSchema = createInsertSchema(urls);
export const selectUrlSchema = createSelectSchema(urls);

export const reactions = sqliteTable("reactions", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  type: text("type").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).notNull(),
});

export const insertReactionSchema = createInsertSchema(reactions);
export const selectReactionSchema = createSelectSchema(reactions);

export const urlReactions = sqliteTable("url_reactions", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  urlId: integer("urlId", { mode: "number" }).notNull(),
  reactionId: integer("reactionId", { mode: "number" }).notNull(),
  count: integer("count", { mode: "number" }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).notNull(),
});

export const insertUrlReactionSchema = createInsertSchema(urlReactions);
export const selectUrlReactionSchema = createSelectSchema(urlReactions);

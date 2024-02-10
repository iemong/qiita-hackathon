import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const urlSchema = sqliteTable("urls", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  url: text("url").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).notNull(),
});

export const insertUrlSchema = createInsertSchema(urlSchema);
export const selectUrlSchema = createSelectSchema(urlSchema);

export const reactionSchema = sqliteTable("reactions", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  type: text("type").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).notNull(),
});

export const insertReactionSchema = createInsertSchema(reactionSchema);
export const selectReactionSchema = createSelectSchema(reactionSchema);

export const urlReactionSchema = sqliteTable("url_reactions", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  urlId: integer("urlId", { mode: "number" }).notNull(),
  reactionId: integer("reactionId", { mode: "number" }).notNull(),
  count: integer("count", { mode: "number" }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).notNull(),
});

export const insertUrlReactionSchema = createInsertSchema(urlReactionSchema);
export const selectUrlReactionSchema = createSelectSchema(urlReactionSchema);

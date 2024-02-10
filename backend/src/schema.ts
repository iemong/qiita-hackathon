import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const reactionSchema = sqliteTable("reactions", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  urlName: text("urlName").notNull(),
  reaction: text("reaction").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).notNull(),
});

export const insertReactionSchema = createInsertSchema(reactionSchema);
export const selectReactionSchema = createSelectSchema(reactionSchema);

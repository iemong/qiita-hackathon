import { reactions } from "../../schema";
import { DrizzleD1Database } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";
import { SQLiteTransaction } from "drizzle-orm/sqlite-core";

type DB = DrizzleD1Database | SQLiteTransaction<any, any, any, any>;

const selectReactions = async (db: DB) => {
  return db.select().from(reactions).all();
};

const findReaction = async (db: DB, reaction: string) => {
  return db
    .select()
    .from(reactions)
    .where(eq(reactions.type, reaction))
    .limit(1)
    .get();
};

const insertReaction = (db: DB, reaction: string) => {
  return db
    .insert(reactions)
    .values({
      type: reaction,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning()
    .get();
};

const deleteReaction = (db: DB, id: number) => {
  return db.delete(reactions).where(eq(reactions.id, id)).execute();
};

export const reactionsService = {
  selectReactions,
  findReaction,
  insertReaction,
  deleteReaction,
};

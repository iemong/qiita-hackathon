import { reactions } from "../../schema";
import { DrizzleD1Database } from "drizzle-orm/d1";
import { eq, inArray } from "drizzle-orm";

type DB = DrizzleD1Database;

const selectReactions = async (db: DB, array?: number[]) => {
  if (array === undefined) return db.select().from(reactions).all();
  return db.select().from(reactions).where(inArray(reactions.id, array)).all();
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

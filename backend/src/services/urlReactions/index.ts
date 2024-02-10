import { DrizzleD1Database } from "drizzle-orm/d1";
import { urlReactions } from "../../schema";
import { and, eq, inArray, sql } from "drizzle-orm";

type DB = DrizzleD1Database;

const selectUrlReactions = async (db: DB, array?: number[]) => {
  if (array === undefined) {
    return db.select().from(urlReactions).all();
  }
  return db
    .select()
    .from(urlReactions)
    .where(inArray(urlReactions.urlId, array))
    .all();
};

const findUrlReaction = async (
  db: DB,
  request: { urlId: number; reactionId: number },
) => {
  const { urlId, reactionId } = request;
  return db
    .select()
    .from(urlReactions)
    .where(
      and(
        eq(urlReactions.urlId, urlId),
        eq(urlReactions.reactionId, reactionId),
      ),
    )
    .get();
};

const insertUrlReaction = (
  db: DB,
  request: {
    urlId: number;
    reactionId: number;
  },
) => {
  const { urlId, reactionId } = request;
  return db
    .insert(urlReactions)
    .values({
      urlId,
      reactionId,
      count: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .execute();
};

const incrementUrlReaction = (
  db: DB,
  request: {
    urlId: number;
    reactionId: number;
  },
) => {
  const { urlId, reactionId } = request;
  return db
    .update(urlReactions)
    .set({ count: sql`${urlReactions.count} + 1` })
    .where(
      and(
        eq(urlReactions.urlId, urlId),
        eq(urlReactions.reactionId, reactionId),
      ),
    )
    .execute();
};

export const urlReactionsService = {
  selectUrlReactions,
  findUrlReaction,
  insertUrlReaction,
  incrementUrlReaction,
};

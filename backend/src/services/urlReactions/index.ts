import { drizzle } from "drizzle-orm/d1";
import { urlReactions } from "../../schema";
import { and, eq, sql } from "drizzle-orm";

const selectUrlReactions = async (c: any) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(urlReactions).all();
  return c.json(result);
};

const findUrlReaction = async (
  c: any,
  request: { urlId: number; reactionId: number },
) => {
  const db = drizzle(c.env.DB);
  const { urlId, reactionId } = request;
  const result = await db
    .select()
    .from(urlReactions)
    .where(
      and(
        eq(urlReactions.urlId, urlId),
        eq(urlReactions.reactionId, reactionId),
      ),
    )
    .all();
  return c.json(result[0]);
};

const insertUrlReaction = (
  c: any,
  request: {
    urlId: number;
    reactionId: number;
  },
) => {
  const db = drizzle(c.env.DB);
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
  c: any,
  request: {
    urlId: number;
    reactionId: number;
  },
) => {
  const db = drizzle(c.env.DB);
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

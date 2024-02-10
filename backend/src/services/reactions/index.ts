import { z } from "zod";
import { insertReactionSchema, reactions } from "../../schema";
import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";

const selectReactions = async (c: any) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(reactions).all();
  return c.json(result);
};

const insertReaction = (
  c: any,
  request: Pick<z.infer<typeof insertReactionSchema>, "type">,
) => {
  const db = drizzle(c.env.DB);
  const { type } = request;
  return db
    .insert(reactions)
    .values({
      type,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .execute();
};

const deleteReaction = (c: any, id: number) => {
  const db = drizzle(c.env.DB);
  return db.delete(reactions).where(eq(reactions.id, id)).execute();
};

export const reactionsService = {
  selectReactions,
  insertReaction,
  deleteReaction,
};

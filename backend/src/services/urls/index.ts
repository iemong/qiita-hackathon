import { DrizzleD1Database } from "drizzle-orm/d1";
import { urls } from "../../schema";
import { eq, inArray } from "drizzle-orm";

type DB = DrizzleD1Database;

const selectUrls = (db: DB, array?: number[]) => {
  if (array === undefined) return db.select().from(urls).all();
  return db.select().from(urls).where(inArray(urls.id, array)).all();
};

const findUrl = (db: DB, url: string) => {
  return db.select().from(urls).where(eq(urls.url, url)).limit(1).get();
};

const insertUrl = (db: DB, url: string) => {
  return db
    .insert(urls)
    .values({
      url,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning()
    .get();
};

export const urlsService = {
  selectUrls,
  insertUrl,
  findUrl,
};

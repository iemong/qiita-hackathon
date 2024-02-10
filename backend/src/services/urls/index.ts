import { DrizzleD1Database, drizzle } from "drizzle-orm/d1";
import { urls } from "../../schema";
import { eq } from "drizzle-orm";
import { SQLiteTransaction } from "drizzle-orm/sqlite-core";

type DB = DrizzleD1Database | SQLiteTransaction<any, any, any, any>;

const selectUrls = (db: DB) => {
  return db.select().from(urls).all();
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

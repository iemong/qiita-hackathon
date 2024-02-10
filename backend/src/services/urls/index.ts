import { drizzle } from "drizzle-orm/d1";
import { urls } from "../../schema";

const selectUrls = (c: any) => {
  const db = drizzle(c.env.DB);
  return db.select().from(urls).all();
};

const insertUrl = (c: any, url: string) => {
  const db = drizzle(c.env.DB);
  return db
    .insert(urls)
    .values({
      url,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .execute();
};

export const urlsService = {
  selectUrls,
  insertUrl,
};
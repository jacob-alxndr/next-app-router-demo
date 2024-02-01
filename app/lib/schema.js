import { pgTable, serial, text, timestamp, numeric } from "drizzle-orm/pg-core";
export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  createdat: timestamp("createdat"),
});

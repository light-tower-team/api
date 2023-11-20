import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const devices = pgTable("devices", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

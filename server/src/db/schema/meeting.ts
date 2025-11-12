import { uuid, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const meeting = pgTable("meeting", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
});

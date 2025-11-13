import { relations } from "drizzle-orm";
import { meetingParticipants, meeting, user } from "../schema.js";

export const meetingRelations = relations(meeting, ({ one, many }) => ({
  creator: one(user, {
    fields: [meeting.hostId],
    references: [user.id]
  }),
  participants: many(meetingParticipants)
}))
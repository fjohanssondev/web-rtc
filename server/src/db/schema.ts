import { createId } from "@paralleldrive/cuid2";
import { boolean, pgSchema, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const authSchema = pgSchema('auth');

export const user = authSchema.table("user", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = authSchema.table("session", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = authSchema.table("account", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const verification = authSchema.table("verification", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

// Meetings

export const meeting = pgTable("meeting", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  title: text("title").notNull(),
  roomName: text("room_name").notNull().unique(),
  status: text("status", { 
    enum: ["scheduled", "active", "ended"] 
  }).notNull().default("scheduled"),
  isPublic: boolean("is_public").default(false).notNull(),
  requiresApproval: boolean("requires_approval").default(false).notNull(),
  meetingToken: text("meeting_token")
    .notNull()
    .unique()
    .$defaultFn(() => nanoid(10)),
  hostId: text("host_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
  scheduledStartAt: timestamp("scheduled_start_at").notNull(),
  scheduledEndAt: timestamp("scheduled_end_at").notNull(),
  startedAt: timestamp("started_at"),
  endedAt: timestamp("ended_at")
})

export const meetingParticipants = pgTable("meeting_participants", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  meetingId: text("meeting_id").notNull().references(() => meeting.id, { onDelete: "cascade" }),
  userId: text("user_id").references(() => user.id, { onDelete: "cascade" }),
  livekitParticipantId: text("livekit_participant_id"),
  livekitIdentity: text("livekit_identity").notNull(),
  displayName: text("display_name").notNull(),
  isGuest: boolean("is_guest").default(false).notNull(),
  isAudioEnabled: boolean("is_audio_enabled").default(true),
  isVideoEnabled: boolean("is_video_enabled").default(true),
  joinedAt: timestamp("joined_at").notNull().defaultNow(),
  leftAt: timestamp("left_at")
})

export const meetingInvitations = pgTable("meeting_invitations", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  meetingId: text("meeting_id").notNull().references(() => meeting.id, { onDelete: "cascade" }),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  status: text("status", {
    enum: ["pending", "accepted", "declined"]
  }).notNull().default("pending"),
  invitedAt: timestamp("invited_at").notNull().defaultNow(),
  respondedAt: timestamp("responded_at"),
})
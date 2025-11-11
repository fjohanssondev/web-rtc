CREATE SCHEMA "auth";
--> statement-breakpoint
ALTER TABLE "public"."account" SET SCHEMA "auth";
--> statement-breakpoint
ALTER TABLE "public"."session" SET SCHEMA "auth";
--> statement-breakpoint
ALTER TABLE "public"."user" SET SCHEMA "auth";
--> statement-breakpoint
ALTER TABLE "public"."verification" SET SCHEMA "auth";

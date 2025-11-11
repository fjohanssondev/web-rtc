import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db.js";
import { openAPI } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg"
  }),
  plugins: [
    openAPI()
  ],
  emailAndPassword: {
    enabled: true,
    autoSignIn: true
  }
});
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db',
  dbCredentials: {
    url: process.env.DATABASE_URL as string
  }
})
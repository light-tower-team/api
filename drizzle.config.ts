import { env } from "@app/env";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/app/db/schema/index.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;

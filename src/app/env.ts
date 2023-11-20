import { z } from "zod";

const ENV_SCHEMA = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string().transform(Number).pipe(z.number().positive()),
  HOST: z.string(),
  JWT_SECRET: z.string(),
});

export const env = ENV_SCHEMA.parse(process.env);

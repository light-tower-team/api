import { z } from "zod";

const ENV_SCHEMA = z.object({
  DATABASE_URL: z.string().trim().min(1),
  PORT: z.string().trim().transform(Number).pipe(z.number().positive()),
  HOST: z.string().trim().min(1),
  JWT_SECRET: z.string().trim().min(1),
});

export const env = ENV_SCHEMA.parse(process.env);

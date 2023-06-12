import { AppModule } from "@modules/app.module";
import { INestApplication, NestApplicationOptions } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

export async function createApp(options?: NestApplicationOptions): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, options);
  app.enableCors();
  return app;
}

async function main() {
  const app = await createApp();
  await app.listen(import.meta.env.PORT, import.meta.env.HOST);
}

export let viteNodeApp: Promise<INestApplication>;

if (import.meta.env.PROD) {
  main();
} else {
  viteNodeApp = createApp();
}

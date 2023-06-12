import { PrismaModule } from "@app/prisma.module";
import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { DeviceModule } from "./device/device.module";

@Module({
  imports: [PrismaModule, DeviceModule],
  controllers: [AppController],
})
export class AppModule {}

import { Controller, Get } from "@nestjs/common";
import { Device } from "@prisma/client";

import { DeviceService } from "./device.service";

@Controller("/devices")
export class DeviceController {
  public constructor(private readonly deviceService: DeviceService) {}

  @Get("/")
  public getDevices(): Promise<Device[]> {
    return this.deviceService.getDevices();
  }
}

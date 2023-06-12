import { PrismaService } from "@app/prisma.service";
import { Injectable } from "@nestjs/common";
import { Device, Prisma } from "@prisma/client";

@Injectable()
export class DeviceService {
  public constructor(private readonly prisma: PrismaService) {}

  public createDevice(data: Prisma.DeviceCreateInput): Promise<Device> {
    return this.prisma.device.create({
      data,
    });
  }

  public getDevices(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.DeviceWhereUniqueInput;
      where?: Prisma.DeviceWhereInput;
      orderBy?: Prisma.DeviceOrderByWithRelationInput;
    } = {}
  ): Promise<Device[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.device.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}

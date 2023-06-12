import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/")
  public async index(): Promise<string> {
    return "hello world" as const;
  }
}

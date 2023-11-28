import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getQuest(): object {
    return this.appService.getQuest("01pp","ipfs://","test nft");
  }
}

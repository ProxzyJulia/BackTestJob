import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getQuest(name : string, uri : string, descr : string): object {
    return {
      "name" : name,
      "uri" : uri,
      "description": descr
      };
  }
}

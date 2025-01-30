import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  pong(): string {
    return 'Everything ok!';
  }
}

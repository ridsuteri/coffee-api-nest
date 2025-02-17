import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

  getGoodbye(): string {
    return 'Goodbye World!';
  }
}

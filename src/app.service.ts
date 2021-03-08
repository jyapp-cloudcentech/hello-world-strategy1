import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World...From the ${process.env.ENVIRONMENT} environment`;
  }
}

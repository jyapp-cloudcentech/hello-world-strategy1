import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //Feature 1 Testing
    return `Hello World...From the ${process.env.ENVIRONMENT} environment. Testing Feature Integration. With Final Feature 9 included`;
  }
}

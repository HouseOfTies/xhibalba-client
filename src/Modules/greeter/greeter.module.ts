import { GreeterUpdate } from './services/greeter.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [GreeterUpdate],
})
export class GreeterModule {}

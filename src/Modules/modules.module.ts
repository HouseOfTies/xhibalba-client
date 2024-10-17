/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { GreeterModule } from './greeter/greeter.module';
import { JoinModule } from './join/join.module';

@Module({
  imports: [JoinModule, GreeterModule],
  exports: [JoinModule, GreeterModule],
  controllers: [],
  providers: [],
})
export class ModulesModule {}

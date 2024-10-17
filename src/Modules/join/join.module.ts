import { Module } from '@nestjs/common';
import { JoinService } from './services/join.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  providers: [JoinService, UserService],
})
export class JoinModule {}

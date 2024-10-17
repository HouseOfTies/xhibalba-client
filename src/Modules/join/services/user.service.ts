/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.photoRepository.find();
  }
}

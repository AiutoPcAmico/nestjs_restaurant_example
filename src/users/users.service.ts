import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './users.schema';

export type User = any;

@Injectable()
export class UsersService {
  // eslint-disable-next-line prettier/prettier
  constructor(@InjectModel(Users.name) private userModel: any) {}

  create(newUser) {
    return this.userModel.create(newUser);
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({ username: username }).lean();
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from '../database/users.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private usersModel: mongoose.Model<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    const users = await this.usersModel.find();
    return users;
  }

  async findById(id: string): Promise<Users> {
    const user = await this.usersModel.findById(id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async updateById(id: string, user: Users): Promise<Users> {
    return await this.usersModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
  }

  async deleteByID(id: string): Promise<Users> {
    return await this.usersModel.findByIdAndDelete(id);
  }
}

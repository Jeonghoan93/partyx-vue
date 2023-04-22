import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/database/users.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Users.name)
    private readonly userModel: mongoose.Model<Users>,
  ) {}

  async findUsers(query: Query): Promise<Users[]> {
    const take = Number(query.take) || 10;
    const currentPage = Number(query.page) || 1;
    const skip = take * (currentPage - 1);

    const keyword = query.keyword
      ? {
          email: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const users = await this.userModel
      .find({ ...keyword })
      .limit(take)
      .skip(skip);

    return users;
  }
}

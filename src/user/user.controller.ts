import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() user: Partial<User>): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOneById(id);
  }

  @Get('email/:email')
  async findOneByEmail(@Param('email') email: string): Promise<User | null> {
    return this.userService.findOneByEmail(email);
  }

  @Get('googleId/:googleId')
  async findOneByGoogleId(
    @Param('googleId') googleId: string,
  ): Promise<User | null> {
    return this.userService.findOneByGoogleId(googleId);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() user: Partial<User>,
  ): Promise<User | null> {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User | null> {
    return this.userService.delete(id);
  }
}

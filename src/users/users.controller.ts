import { Controller, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from '../database/users.schema';
import { updateUsersDto } from './dto/update-users.dto';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async gerUser(@Param('id') id: string): Promise<Users> {
    return this.usersService.findById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: updateUsersDto,
  ): Promise<Users> {
    return this.usersService.updateById(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<Users> {
    return this.usersService.deleteByID(id);
  }
}

import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createDishDto) {
    return this.usersService.create(createDishDto);
  }

  @Get()
  findOne(@Body() username) {
    return this.usersService.findOne(username);
  }
}

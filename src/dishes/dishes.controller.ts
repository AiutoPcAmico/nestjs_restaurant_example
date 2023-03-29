import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly dishesService: DishesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDishDto) {
    return this.dishesService.create(createDishDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.dishesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDishDto) {
    return this.dishesService.update(+id, updateDishDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishesService.remove(+id);
  }
}

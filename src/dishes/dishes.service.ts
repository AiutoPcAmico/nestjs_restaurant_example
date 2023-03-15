import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from './dishes.schema';

@Injectable()
export class DishesService {
  // eslint-disable-next-line prettier/prettier
  constructor(@InjectModel(Dish.name) private orderModel: any) { }
  create(newDish) {
    return this.orderModel.create(newDish);
  }

  findAll() {
    return this.orderModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} dish`;
  }

  update(id: number, updateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from 'src/dishes/dishes.schema';
import { Order } from './orders.schema';
import { Promise } from 'bluebird'

@Injectable()
export class OrdersService {
  // eslint-disable-next-line prettier/prettier
  constructor(@InjectModel(Order.name) private orderModel: any, @InjectModel(Dish.name) private dishModel: any) { }

  async create(order: any) {
    const modifiedOrder = order;
    modifiedOrder.creationDate = new Date();



    let totalPrice = 0;
    let position = 0;
    await Promise.map(order.dishes, async (dishId) => {
      const dish = await this.dishModel.find({
        _id: dishId
      })

      console.log(dish)
      console.log(order.quantity[position])
      totalPrice = totalPrice + dish[0].price * order.quantity[position];
      position++;

    })




    modifiedOrder.orderTotalPrice = totalPrice;
    return this.orderModel.create(modifiedOrder);
  }

  findAll(): string {
    return this.orderModel.find().populate(['dishes']);
  }

  async findOne(tableId: number) {
    const result = await this.orderModel.find({
      tableNumber: tableId,
    }).populate(['dishes']);
    console.log(result);
    if (result === null || result.length === 0)
      return `Nessun ordine associato al tavolo ${tableId}!`;
    else return result;
  }

  update(id: number, updateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

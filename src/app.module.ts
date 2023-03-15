import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [OrdersModule, DishesModule],
  controllers: [],
  providers: [],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }

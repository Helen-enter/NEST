import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { OrderService } from 'src/services/order/order.service';
import { Order, OrderSchema } from "../../shemas/order";
import { OrderController } from "./order.controller";

@Module({
  imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}

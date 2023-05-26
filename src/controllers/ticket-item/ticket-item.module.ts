import { Module } from '@nestjs/common';
import { TicketItemController } from "./ticket-item.controller";
import { ToursService } from "../../services/tours/tours.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Tour, TourSchema } from "../../shemas/tour";
import { ToursController } from "../tours/tours.controller";

@Module({
  controllers: [TicketItemController, ToursController],
  imports: [MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),],
  providers: [ToursService],
})
export class TicketItemModule {}

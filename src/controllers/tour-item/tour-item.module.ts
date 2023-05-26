import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../../static/private/constants";
import { TourItemController } from "./tour-item.controller";
import { PassportModule } from '@nestjs/passport';
import { TourItem, TourItemSchema } from "../../shemas/tour-item";
import { TourItemService } from "../../services/tour-item/tour-item.service";
import { JwtStrategyService } from "../../services/Autentification/jwt-strategy/jwt-strategy.service";


@Module({
  controllers: [TourItemController],
  imports: [
    MongooseModule.forFeature([{ name: TourItem.name, schema: TourItemSchema }]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      // signOptions: { expiresIn: '60s' },
    }),
  ],

  providers: [TourItemService, JwtStrategyService],
})
export class TourItemModule {}

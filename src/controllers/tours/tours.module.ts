import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/static/private/constants';
import { JwtStrategyService } from '../../services/Autentification/jwt-strategy/jwt-strategy.service';
import { ToursController } from './tours.controller';
import { Tour, TourSchema } from '../../shemas/tour';
import { ToursService } from '../../services/tours/tours.service';
import { TicketItemController } from '../ticket-item/ticket-item.controller';


@Module({
  controllers: [ToursController, TicketItemController],
  imports: [
    MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [ToursService, JwtStrategyService],
})
export class ToursModule {}

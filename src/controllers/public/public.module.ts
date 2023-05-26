import { Module } from '@nestjs/common';
import { PublicController } from "./public.controller";


@Module({
  controllers: [PublicController],
  imports: [],
  providers: [],
})
export class PublicModule {}

import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { ToursService } from "../../services/tours/tours.service";
import { ITour } from "../../interfaces/tour";
import { JwtAuthGuard } from "../../services/Autentification/jwt-auth.guard/jwt-auth.guard.service";

@Controller("tours")
export class ToursController {
  constructor(private toursService: ToursService) {
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllTours(): Promise<ITour[]> {
    //return 'get all tours'
    return this.toursService.getAllTours();
  }

  // @Get() //new
  // getTours() {
  //   return this.toursService.generateTours();
  // }

  @Post()
  initTours(@Body() data) {
    return this.toursService.generateTours();
    //return this.toursService.getAllTours();
  }

  @Get(":id")
  getTourById(@Param("id") id) {
    return this.toursService.getTourById(id);
  }


  @Delete(":remove")
  removeAllTours(@Param("remove") remove): void {
    this.toursService.deleteTours();
  }

  // @Delete()
  // removeAllTours(): void {
  //   this.toursService.deleteTours();
  // }
  //
  // @Get(':ticket-item')
  // getToursByName(@Param('ticket-item') name) {
  //   return 'hello world'
  //   //return this.toursService.getToursByName(name)
  //
  // }

}

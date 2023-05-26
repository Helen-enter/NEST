import { Controller, Get, Param } from "@nestjs/common";
import { ToursService } from "../../services/tours/tours.service";

@Controller("ticket-item")
export class TicketItemController {

  constructor(private toursService: ToursService) {
  }


  @Get(":id")
  getToursByName(@Param("id") name) {
    // return 'hello world'
    return this.toursService.getToursByName(name);

  }

}

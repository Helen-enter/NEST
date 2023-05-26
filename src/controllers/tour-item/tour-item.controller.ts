import { Body, Controller, Get, Param, Post, Res, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { ITourClient } from "../../interfaces/tour";
import { TourItemService } from "../../services/tour-item/tour-item.service";

@Controller("tour-item")
export class TourItemController {
  constructor(private tourItemService: TourItemService) {
  }

  static imgName: string;

  @Post()
  @UseInterceptors(FileInterceptor("img", {
    storage: diskStorage({
      destination: "./public/",
      filename: (req, file, callback) => {
        const imgType = file.mimetype.split("/");
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const imgName = file.fieldname + "-" + uniqueSuffix + "." + imgType[1];

        callback(null, imgName);
        TourItemController.imgName = imgName;
      }
    })
  }))
  initTours(@Body() body: ITourClient): void {
    body.img = TourItemController.imgName;
    this.tourItemService.uploadTour(body);
  }

  @Get()
  getTourItems() {
    return this.tourItemService.getTourItems();
  }

  @Get(":id")
  getTourItemById(@Param("id") id) {
    return this.tourItemService.getTourItemById(id);
  }

}

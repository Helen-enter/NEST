import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Tour, TourDocument } from "../../shemas/tour";
import { Model } from "mongoose";
import { TourDto } from "../../dto/tour-dto";
import { ITour } from "../../interfaces/tour";
import { tours } from "../../data/data";


@Injectable()
export class ToursService {
  //private toursCount = 10;

  constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {
  }

  // generateTours(): void {
  //   for (let i = 0; i <= this.toursCount; i++) {
  //     const tour = new TourDto(
  //       'test' + i,
  //       'test desc',
  //       'test operator',
  //       'test price' + i,
  //     );
  //     const tourData = new this.tourModel(tour);
  //     tourData.save();
  //   }
  // }

  async generateTours() {

    for (let i = 0; i < tours.length; i++) {
      const tour = new TourDto(
        `${tours[i].id}`,
        `${tours[i].name}`,
        `${tours[i].description}`,
        `${tours[i].tourOperator}`,
        `${tours[i].price}`,
        `${tours[i].img}`,
        `${tours[i].date}`,
        `${tours[i].type}`
      );
      const toursData = new this.tourModel(tour);
      await toursData.save();
    }
    console.log(tours.length);
    return this.getAllTours();
  }

  async getTourById(id): Promise<ITour> {
    return this.tourModel.findById(id);
  }

  async deleteTours(): Promise<any> {
    return this.tourModel.deleteMany({});
  }

  async getAllTours(): Promise<ITour[]> {
    return this.tourModel.find();
  }

  async getToursByName(name): Promise<ITour[]> {
    return this.tourModel.find({name: { "$regex": name, "$options": "i" }})

  }

}

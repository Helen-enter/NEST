import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TourItem, TourItemDocument } from "../../shemas/tour-item";
import { ITour, ITourClient } from "../../interfaces/tour";
import { TourItemDto } from "../../dto/tour-item-dto";

@Injectable()
export class TourItemService {

  constructor(@InjectModel(TourItem.name) private tourItemModel: Model<TourItemDocument>) {
  }

  async uploadTour(body: ITourClient) {
    const tour = new TourItemDto(body.name, body.description, body.tourOperator, body.price, body.img);
    const tourData = new this.tourItemModel(tour);
    await tourData.save();
  }


  async getTourItems(): Promise<ITourClient[]> {
    return this.tourItemModel.find()
  }

  async getTourItemById(id): Promise<ITourClient> {
    return this.tourItemModel.findById(id);
  }

}

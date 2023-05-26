import { ITour, ITourClient } from "../interfaces/tour";

export class TourItemDto implements ITour {
  description: string;
  img: any;
  name: string;
  price: string;
  tourOperator: string;
  _id: string

  constructor(name, description, tourOperator, price, img) {
    this.name = name;
    this.description = description;
    this.tourOperator = tourOperator;
    this.price = price;
    this.img = img;
  }
}
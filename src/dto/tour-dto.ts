import { ITour } from "../interfaces/tour";

export class TourDto implements ITour {
  date: string;
  description: string;
  id: string;
  img: string;
  name: string;
  price: string;
  tourOperator: string;
  type: string;
  _id: string

  constructor(id, name, description, tourOperator, price, img, type, date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tourOperator = tourOperator;
    this.price = price;
    this.img = img;
    this.type = type;
    this.date = date
  }

}
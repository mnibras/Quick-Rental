import {User} from "./user";
import {Vehicle} from "./vehicle";

export class Hire {
  id:number;
  location:string;
  destination:string;
  hireDate:string;
  hireTime:string;
  startMilage:number;
  endMilage:number;
  amount:number;
  bookingSeats:number;
  description:string;
  isFinished:boolean;
  status:number;

  customer:User;
  vehicle:Vehicle;
  driver:User;

  Hire(){
    this.id = 0;
    this.location = "";
    this.destination = "";
    this.hireDate = "";
    this.hireTime = "";
    this.startMilage = 0;
    this.endMilage = 0;
    this.amount = 0;
    this.bookingSeats = 0;
    this.description = "";
    this.isFinished = false;
    this.status = 0;

    this.customer = null;
    this.vehicle = null;
    this.driver = null;
  }

}

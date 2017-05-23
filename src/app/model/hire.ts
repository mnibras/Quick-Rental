import {User} from "./user";
import {Vehicle} from "./vehicle";

export class Hire {
  id:number;
  amount:number;
  bookingSeats:number;
  description: string;
  destination:string;
  endMilage:number;
  hireDate:string;
  hireTime:string;
  finished:boolean;
  location:string;
  startMilage:number;
  status:number;

  customer:User;
  driver:User;
  vehicle:Vehicle;



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
    this.finished = false;
    this.status = 0;

    this.customer = null;
    this.vehicle = null;
    this.driver = null;
  }

}

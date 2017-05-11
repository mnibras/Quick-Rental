import {User} from "./user";
import {Vehicle} from "./vehicle";

export class Rent {
  id:number;
  startDate:string;
  startTime:string;
  endDate:string;
  endTime:string;
  startMilage:number;
  endMilage:number;
  advanceAmount:number;
  amount:number;
  description:string;
  isFinished:boolean;
  status:number;

  customer:User;
  vehicle:Vehicle;

  Rent(){
    this.id = 0;
    this.startDate = "";
    this.startTime = "";
    this.endDate = "";
    this.endTime = "";
    this.startMilage = 0;
    this.endMilage = 0;
    this.advanceAmount= 0;
    this.amount = 0;
    this.description = "";
    this.isFinished = false;
    this.status = 0;
    this.customer = null;
    this.vehicle = null;

  }

}

import {User} from "./user";
import {Vehicle} from "./vehicle";

export interface Hire {
  id:number;
  location:string;
  destination:string;
  hireDate:string;
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

}

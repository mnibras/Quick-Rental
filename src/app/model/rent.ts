import {User} from "./user";
import {Vehicle} from "./vehicle";

export interface Rent {
  id:number;
  startDate:string;
  endDate:string;
  startMilage:number;
  endMilage:number;
  advanceAmount:number;
  amount:number;
  description:string;
  isFinished:boolean;
  status:number;

  customer:User;
  vehicle:Vehicle;

}

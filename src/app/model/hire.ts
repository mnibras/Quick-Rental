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
  isFinished:number;
  location:string;
  startMilage:number;
  status:number;

  customer:User;
  driver:User;
  vehicle:Vehicle;



 /* Hire(){
    this.id = 0;
    this.location = "";
    this.destination = "";
    this.hire_date = "";
    this.hire_time = "";
    this.start_milage = 0;
    this.end_milage = 0;
    this.amount = 0;
    this.booking_seats = 0;
    this.description = "";
    this.is_finished = 0;
    this.status = 0;

    this.customer = null;
    this.vehicle = null;
    this.driver = null;
  }*/

}

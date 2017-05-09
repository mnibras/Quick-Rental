import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";

import {Vehicle} from "../../app/model/vehicle";
import {AdminCarService} from "../../providers/admin-car-service";


/**
 * Generated class for the AdminAddCar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-add-car',
  templateUrl: 'admin-add-car.html',
})
export class AdminAddCar {
  private vehicleDto:Vehicle;
  private vehicleDtoList:Vehicle[];

   vehicle = {
    id : 0,
    type : '',
    vehicleNo:'',
    modelNo:'',
    colour:'',
    year:0,
    currentMillage:0
  };


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public adminCarService: AdminCarService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddCar');
  }

  submitToAddCar(form:NgForm){
    this.vehicleDto.type = this.vehicle.type;
    this.vehicleDto.vehicleNo = this.vehicle.vehicleNo;
    this.vehicleDto.modelNo = this.vehicle.modelNo;
    this.vehicleDto.colour = this.vehicle.colour;
    this.vehicleDto.year = this.vehicle.year;
    this.vehicleDto.currentMillage = this.vehicle.currentMillage;

    this.adminCarService.addVehicle(this.vehicleDto).subscribe(
                                vehicleRes => {
                                    this.vehicleDtoList = vehicleRes
                                }, 
                                err => {
                                    console.log(err);
                                });
  }

}

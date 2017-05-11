import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from "../../app/model/vehicle";
import {AdminCarService} from "../../providers/admin-car-service";
import {AdminVehicle} from "../admin-vehicle/admin-vehicle";
import {AdminAddCar} from "../admin-add-car/admin-add-car";
import {AdminUpdateCar} from "../admin-update-car/admin-update-car";

/**
 * Generated class for the AdminAvailableCars page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-available-cars',
  templateUrl: 'admin-available-cars.html',
})
export class AdminAvailableCars {
  public vehiclesList: Vehicle[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public adminCarService: AdminCarService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAvailableCars');
  }

  ngOnInit()
  {
    this.getListOfVehicles();
  }


  getListOfVehicles(){
    this.adminCarService.getVehiclesList().subscribe(
                                data => {
                                    this.vehiclesList = data;
                                    console.log(JSON.stringify(data));
                                },
                                err => {
                                    console.log("Error : "+err);
                                });
  }

  loadAddVehiclePage(){
    this.navCtrl.push(AdminAddCar);
  }

  viewVehicle(vehicle:Vehicle){
    this.navCtrl.push(AdminVehicle,{vehicle:vehicle});
  }

  updateVehicle(vehicle:Vehicle){
    this.navCtrl.push(AdminUpdateCar,{vehicle:vehicle});
  }

  deleteVehicle(id:number){
    this.adminCarService.removeVehicle(id).subscribe(
                          data => {
                            console.log(JSON.stringify(data));
                          },
                          err => {
                            console.log("Error : "+err);
                          });
  }

}

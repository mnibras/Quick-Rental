import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Vehicle } from "../../app/model/vehicle";
import {AdminCarService} from "../../providers/admin-car-service";

/**
 * Generated class for the AdminAvailableCars page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
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


  getListOfVehicles(){
    this.adminCarService.getVehiclesList().subscribe(
                                vehicleRes => {
                                    this.vehiclesList = vehicleRes
                                }, 
                                err => {
                                    console.log(err);
                                });
  }


}

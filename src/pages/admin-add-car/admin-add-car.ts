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
  public vehicle:Vehicle;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public adminCarService: AdminCarService) {
      this.vehicle = new Vehicle();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddCar');
  }

  submitToAddCar(form:NgForm){
    console.log("submitToAddCar : "+ JSON.stringify(this.vehicle));
    this.adminCarService.addVehicle(this.vehicle)
                        .subscribe(
                          (data:any) => {
                            this.navCtrl.pop();
                            console.log(data);
                          }
                        );
  }

}

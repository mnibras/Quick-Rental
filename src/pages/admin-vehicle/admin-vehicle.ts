import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Vehicle} from "../../app/model/vehicle";

/**
 * Generated class for the AdminVehicle page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-vehicle',
  templateUrl: 'admin-vehicle.html',
})
export class AdminVehicle {

  public vehicle: Vehicle;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.vehicle = this.navParams.data.vehicle;
      console.log("Availability : "+ this.vehicle.available);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminVehicle');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AdminAddCar} from '../admin-add-car/admin-add-car';
import {AdminAddDriver} from '../admin-add-driver/admin-add-driver';


/**
 * Generated class for the AdminDashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-dashboard',
  templateUrl: 'admin-dashboard.html',
})
export class AdminDashboard {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDashboard');
  }

  addCar(){
    this.navCtrl.push(AdminAddCar);
  }

  addDriver(){
    this.navCtrl.push(AdminAddDriver);
  }

}

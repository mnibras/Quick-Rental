import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {AdminAddCar} from '../admin-add-car/admin-add-car';
import {AdminAddDriver} from '../admin-add-driver/admin-add-driver';
import {AdminRentDetails} from "../admin-rent-details/admin-rent-details";
import {AdminNotifications} from "../admin-notifications/admin-notifications";
import {AdminHireDetails} from "../admin-hire-details/admin-hire-details";
import {AdminAvailableCars} from "../admin-available-cars/admin-available-cars";


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


  showCarDetailsPage(){
    this.navCtrl.push(AdminAvailableCars);
  }

  showDriverDetailsPage(){
    this.navCtrl.push(AdminAddDriver);
  }

  showRentDetailsPage(){
    this.navCtrl.push(AdminRentDetails);
  }

  showHireDetailsPage(){
    this.navCtrl.push(AdminHireDetails);
  }

  showNotificationPage(){
    this.navCtrl.push(AdminNotifications);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AdminRentDetails} from "../admin-rent-details/admin-rent-details";
import {AdminNotifications} from "../admin-notifications/admin-notifications";
import {AdminHireDetails} from "../admin-hire-details/admin-hire-details";
import {AdminAvailableCars} from "../admin-available-cars/admin-available-cars";
import {AdminAvailableDrivers} from "../admin-available-drivers/admin-available-drivers";


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
    this.navCtrl.push(AdminAvailableDrivers);
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

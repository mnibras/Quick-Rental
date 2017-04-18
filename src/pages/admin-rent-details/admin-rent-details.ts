import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AdminAvailableCars} from "../admin-available-cars/admin-available-cars";
import {AdminRentNotification} from "../admin-rent-notification/admin-rent-notification";
import {AdminRentHistory} from "../admin-rent-history/admin-rent-history";

/**
 * Generated class for the AdminRentDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-rent-details',
  templateUrl: 'admin-rent-details.html',
})
export class AdminRentDetails {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminRentDetails');
  }

  showRentHistoryPage(){
    this.navCtrl.push(AdminRentHistory);
  }

  showAvailableVehiclePage(){
    this.navCtrl.push(AdminAvailableCars);
  }

  showRentNotificationPage(){
    this.navCtrl.push(AdminRentNotification);
  }


}

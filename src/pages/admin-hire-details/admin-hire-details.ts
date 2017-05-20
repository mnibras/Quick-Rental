import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AdminAvailableDrivers} from "../admin-available-drivers/admin-available-drivers";
import {AdminAvailableCars} from "../admin-available-cars/admin-available-cars";
import {AdminHireHistory} from "../admin-hire-history/admin-hire-history";

/**
 * Generated class for the AdminHireDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-hire-details',
  templateUrl: 'admin-hire-details.html',
})
export class AdminHireDetails {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHireDetails');
  }

  showAvailableDriversPage(){
    this.navCtrl.push(AdminAvailableDrivers);
  }

  showAvailableVehiclePage(){
    this.navCtrl.push(AdminAvailableCars);
  }

  showHireHistoryPage(){
    this.navCtrl.push(AdminHireHistory);
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {User} from "../../app/model/user";
import {AdminDriverService} from "../../providers/admin-driver-service";
import {AdminAddDriver} from "../admin-add-driver/admin-add-driver";
import {AdminDriver} from "../admin-driver/admin-driver";
import {AdminUpdateDriver} from "../admin-update-driver/admin-update-driver";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";


/**
 * Generated class for the AdminAvailableDrivers page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-available-drivers',
  templateUrl: 'admin-available-drivers.html',
})
export class AdminAvailableDrivers {
  public driverList:User[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public adminDriverService:AdminDriverService) {
    this.getDriverDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAvailableDrivers');
  }

  ngOnInit()
  {
    this.getDriverDetails();
  }

  ionViewWillEnter() {
    this.getDriverDetails();
  }

  getDriverDetails(){
    this.adminDriverService.getDriversList().subscribe(
      data => {
        this.driverList = data;
        console.log(JSON.stringify(data));
      },
      err => {
        console.log("Error : "+err);
      });
  }

  loadAddDriverPage(){
    this.navCtrl.push(AdminAddDriver);
  }

  viewDriver(driver:User){
    this.navCtrl.push(AdminDriver,{driver:driver});
  }

  updateDriver(driver:User){
    console.log("updateDriver : "+ JSON.stringify(driver));

    this.navCtrl.push(AdminUpdateDriver,{driver:driver});
  }

  deleteDriver(id:number){
    this.adminDriverService.removeDriver(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.navCtrl.popTo(AdminDashboard);
        //this.getDriverDetails();
      },
      err => {
        console.log("Error : "+err);
      });

    this.navCtrl.popTo(AdminDashboard);

  }
}

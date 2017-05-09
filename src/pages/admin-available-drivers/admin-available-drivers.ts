import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {User} from "../../app/model/user";
import {AdminDriverService} from "../../providers/admin-driver-service";


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
  public userList:User[];
  public user:User;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public adminDriverService:AdminDriverService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAvailableDrivers');
    
  }

  getDriverDetails(id:number){
    this.adminDriverService.getDriver(id).subscribe(theUser => {
      this.user = theUser;
    });
  }

  getDriverList(){
    this.adminDriverService.getDriversList().subscribe(user => {
      this.userList = user;
    });
  }

}

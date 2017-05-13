import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../app/model/user";
import {NgForm} from "@angular/forms";
import {AdminDriverService} from "../../providers/admin-driver-service";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";

/**
 * Generated class for the AdminUpdateDriver page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-update-driver',
  templateUrl: 'admin-update-driver.html',
})
export class AdminUpdateDriver {
  public driver:User;

  constructor(public navCtrl: NavController, public navParams: NavParams,public adminDriverService: AdminDriverService) {

    this.driver = navParams.data.driver;
    console.log("driver name no : "+ this.driver.fullname);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUpdateDriver');
  }

  submitToUpdateDriver(form:NgForm){
    console.log("submitToUpdateCar : "+ JSON.stringify(this.driver));
    this.adminDriverService.editDriver(this.driver)
      .subscribe(
        (data:any) => {
          this.navCtrl.popTo(AdminDashboard);
          console.log(data);
        }
      );
  }

}

import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, App} from 'ionic-angular';
import {NgForm} from "@angular/forms";

import {User} from "../../app/model/user";
import {AdminDriverService} from "../../providers/admin-driver-service";

/**
 * Generated class for the AdminAddDriver page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-add-driver',
  templateUrl: 'admin-add-driver.html',
})
export class AdminAddDriver {
  private driver:User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public adminDriverService:AdminDriverService,
              public appCtrl: App) {
    this.driver = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddDriver');
  }



  submitToAddDriver(form:NgForm){
    this.driver.userRole = 3;

    console.log("submitToAddDriver : "+ JSON.stringify(this.driver));
    this.adminDriverService.addDriver(this.driver)
      .subscribe(
        (data:any) => {
          this.navCtrl.pop();
          console.log(data);
        }
      );
  }

}

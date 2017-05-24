import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, App, LoadingController, AlertController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public navParams: NavParams, public adminDriverService:AdminDriverService,
              public appCtrl: App) {
    this.driver = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddDriver');
  }



  submitToAddDriver(form:NgForm){
    this.driver.userRole = 3;

    console.log("submitToAddDriver : "+ JSON.stringify(this.driver));

    let loading = this.loadingCtrl.create({
      content: 'Submitting driver details...'
    });

    loading.present();
    this.adminDriverService.addDriver(this.driver)
      .subscribe(
        (data:any) => {
          loading.dismiss();
          this.navCtrl.pop();
          this.showAlert();
          console.log(data);
        }
      );
  }

  showAlert() {

    let alert = this.alertCtrl.create({
      title: 'Added a Driver',
      subTitle: 'You have successfully added.. ',
      buttons: ['OK']
    });
    alert.present();
  }

}

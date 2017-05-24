import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public adminDriverService: AdminDriverService) {

    this.driver = navParams.data.driver;
    console.log("driver name no : "+ this.driver.fullname);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUpdateDriver');
  }

  submitToUpdateDriver(form:NgForm){
    console.log("submitToUpdateCar : "+ JSON.stringify(this.driver));
    let loading = this.loadingCtrl.create({
      content: 'Updating driver details...'
    });

    loading.present();
    this.adminDriverService.editDriver(this.driver)
      .subscribe(
        (data:any) => {
          loading.dismiss();
          this.navCtrl.popTo(AdminDashboard);
          this.showAlert();
          console.log(data);
        }
      );
  }

  showAlert() {

    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'You have successfully updated.. ',
      buttons: ['OK']
    });
    alert.present();
  }

}

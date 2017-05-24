import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import {Vehicle} from "../../app/model/vehicle";
import {AdminCarService} from "../../providers/admin-car-service";
import {NgForm} from "@angular/forms";

/**
 * Generated class for the AdminUpdateCar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-update-car',
  templateUrl: 'admin-update-car.html',
})
export class AdminUpdateCar {

  public vehicle:Vehicle;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public adminCarService: AdminCarService) {
    this.vehicle = navParams.data.vehicle;
    console.log("vehicle no : "+ this.vehicle.vehicleNo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUpdateCar');
  }

  submitToUpdateCar(form:NgForm){
    console.log("submitToUpdateCar : "+ JSON.stringify(this.vehicle));
    let loading = this.loadingCtrl.create({
      content: 'Updating vehicle details...'
    });
    loading.present();
    this.adminCarService.editVehicle(this.vehicle)
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
      title: '',
      subTitle: 'You have successfully updated.. ',
      buttons: ['OK']
    });
    alert.present();
  }

}

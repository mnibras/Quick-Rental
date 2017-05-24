import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {NgForm, FormGroup, FormBuilder, Validators} from "@angular/forms";

import {Vehicle} from "../../app/model/vehicle";
import {AdminCarService} from "../../providers/admin-car-service";


/**
 * Generated class for the AdminAddCar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-add-car',
  templateUrl: 'admin-add-car.html',
})
export class AdminAddCar {
  public vehicle:Vehicle;

  addVehicleForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public adminCarService: AdminCarService,
              public formBuilder: FormBuilder) {
      this.vehicle = new Vehicle();

    this.addVehicleForm = formBuilder.group({
      modelNo: ['', Validators.compose([Validators.maxLength(7), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddCar');
  }

  submitToAddCar(form:NgForm){
    let loading = this.loadingCtrl.create({
      content: 'Submitting vehicle details...'
    });

    loading.present();
    this.adminCarService.addVehicle(this.vehicle)
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
      title: 'Added a vehicle',
      subTitle: 'You have successfully added.. ',
      buttons: ['OK']
    });
    alert.present();
  }

}

import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import {Rent} from "../../app/model/rent";
import {Vehicle} from "../../app/model/vehicle";
import {AdminRentService} from "../../providers/admin-rent-service";
import {AdminCarService} from "../../providers/admin-car-service";
import {AdminRentHistory} from "../admin-rent-history/admin-rent-history";
import {NgForm} from "@angular/forms";

/**
 * Generated class for the AdminRentInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-rent-info',
  templateUrl: 'admin-rent-info.html',
})
export class AdminRentInfo {

  public rent: Rent;

  public isVehicleListEmpty:boolean;
  public isSetSelectedVehicle:boolean = false;

  public vehiclesList: Vehicle[];
  public selectedVehicle:Vehicle;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public adminCarService:AdminCarService,
              public adminRentService:AdminRentService) {

    this.rent = this.navParams.data.rent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminRentInfo');
  }

  acceptRent(rent:Rent){
    let loading = this.loadingCtrl.create({
      content: 'You have accepted the details...'
    });
    loading.present();
    rent.status = 2;
    rent.startMilage = rent.vehicle.currentMillage;
    this.adminRentService.acceptRentDetails(rent)
      .subscribe(
        (data:any) => {
          loading.dismiss();
          this.navCtrl.popTo(AdminRentHistory);
          console.log(data);
        }
      );
  }

  rejectRent(rent:Rent){
    let loading = this.loadingCtrl.create({
      content: 'You have rejected the details...'
    });
    loading.present();

    rent.status = 3;
    this.adminRentService.rejectRentDetails(rent)
      .subscribe(
        (data:any) => {
          loading.dismiss();
          this.navCtrl.popTo(AdminRentHistory);
          console.log(data);
        }
      );
  }

  completeRent(form:NgForm){
    let loading = this.loadingCtrl.create({
      content: 'Complete Rent details...'
    });
    loading.present();

    this.rent.finished = true;
    this.rent.vehicle.currentMillage = this.rent.endMilage;
    this.rent.amount = this.rent.vehicle.rentPerDay * (this.rent.endMilage - this.rent.startMilage);
    this.adminRentService.completeRentDetails(this.rent)
      .subscribe(
        (data:any) => {
          loading.dismiss();
          this.navCtrl.popTo(AdminRentHistory);
          this.showAlert();
          console.log(data);
        }
      );
  }

  showAlert() {

    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Rent details is completed.. ',
      buttons: ['OK']
    });
    alert.present();
  }
}

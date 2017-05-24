import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Rent} from "../../app/model/rent";
import { AdminRentService } from '../../providers/admin-rent-service';
import {AuthService} from "../../providers/auth-service";
import {JwtHelper} from "angular2-jwt";

/**
 * Generated class for the RentStep3 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rent-step3',
  templateUrl: 'rent-step3.html',
})
export class RentStep3 {


  public pickedVehicleId: number;
  public customerId: number;
  public rent: Rent;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public adminRentService: AdminRentService,
              private readonly jwtHelper: JwtHelper,
              private readonly authService: AuthService) {

    this.pickedVehicleId = navParams.get('pickedVehicleId');
    this.rent = new Rent();

        this.authService.authUser.subscribe(jwt => {
          if (jwt) {
            const decoded = this.jwtHelper.decodeToken(jwt);
            this.customerId = decoded.userId;
          }
          else {
            this.customerId = 0;
          }
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentStep3');
  }

  submitRentDetails(formData){
/*
    var date = new Date();

    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth() + 1;
    var currentDate = date.getDate();

    */

    this.rent.startDate = formData.startDate;

    this.rent.endDate = formData.endDate;
    this.rent.startTime = formData.startTime;
    this.rent.endTime = formData.endTime;

    let loading = this.loadingCtrl.create({
      content: 'Requesting Rent Vehicle...'
    });

    loading.present();

    this.adminRentService.addRentDetails(this.rent, this.customerId, this.pickedVehicleId)
                         .subscribe(
                              response =>{
                                  loading.dismiss();
                                  console.log('Rent details added');
                                  this.showAlert();
                                  this.navCtrl.push(HomePage);
                              }
                          );

    }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Rent Car requested',
      subTitle: 'Your request is processing, Notification will reciewe when confirmed ',
      buttons: ['OK']
    });
    alert.present();
  }

  cancelRentRequet(){
    this.navCtrl.popTo(HomePage);
  }

}

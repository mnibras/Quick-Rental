import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { AdminRentService } from '../../providers/admin-rent-service';
import { Rent } from "../../app/model/rent";
import { ViewRent } from '../view-rent/view-rent';
import {AuthService} from "../../providers/auth-service";
import {JwtHelper} from "angular2-jwt";

/**
 * Generated class for the CustomerRentNotification page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-rent-notification',
  templateUrl: 'customer-rent-notification.html',
})
export class CustomerRentNotification {

  public rentList: Rent[];
  public customerId: number

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public adminRentService: AdminRentService,
              private readonly jwtHelper: JwtHelper,
              private readonly authService: AuthService) {
          
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
    console.log('ionViewDidLoad CustomerRentNotification');
  }

  ngOnInit(){
    let loading = this.loadingCtrl.create({
      content: 'Loading Notifications...'
    });

    loading.present();
    this.adminRentService.getRentDetailsByUser(this.customerId)
                         .subscribe(
                                response =>{
                                  loading.dismiss();
                                  this.rentList = response;
                                  console.log(JSON.stringify(response));
                                },
                                err => {
                                    console.log("Error : "+err);
                                });
  }

  viewRent(id:number){
    console.log('called');
    this.navCtrl.push(ViewRent,{
      rentId:id
    });
  }

  backToDashboard(){
    this.navCtrl.popTo(HomePage);
  }



}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AdminRentDetails} from "../admin-rent-details/admin-rent-details";
import {AdminHireDetails} from "../admin-hire-details/admin-hire-details";
import {AdminAvailableCars} from "../admin-available-cars/admin-available-cars";
import {AdminAvailableDrivers} from "../admin-available-drivers/admin-available-drivers";
import {AuthHttp, JwtHelper} from "angular2-jwt";
import {AuthService} from "../../providers/auth-service";
import {SERVER_URL} from "../../config";


/**
 * Generated class for the AdminDashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-dashboard',
  templateUrl: 'admin-dashboard.html',
})
export class AdminDashboard {

  user: string;
  message: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly authService: AuthService,
              private readonly jwtHelper: JwtHelper,
              private readonly  authHttp: AuthHttp) {

    this.authService.authUser.subscribe(jwt => {
      if (jwt) {
        const decoded = this.jwtHelper.decodeToken(jwt);
        this.user = decoded.sub
      }
      else {
        this.user = null;
      }
    });
  }



  ionViewWillEnter() {
    this.authHttp.get(`${SERVER_URL}/secret`).subscribe(
      data => this.message = data.text(),
      err => console.log(err)
    );
  }

  logout() {
    this.authService.logout();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDashboard');
  }


  showCarDetailsPage(){
    this.navCtrl.push(AdminAvailableCars);
  }

  showDriverDetailsPage(){
    this.navCtrl.push(AdminAvailableDrivers);
  }

  showRentDetailsPage(){
    this.navCtrl.push(AdminRentDetails);
  }

  showHireDetailsPage(){
    this.navCtrl.push(AdminHireDetails);
  }



}

import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {HireStep1} from '../hire-step1/hire-step1';
import {RentStep1} from '../rent-step1/rent-step1';
import {Login} from '../login/login';
import {CustomerNotifications} from '../customer-notifications/customer-notifications';
import {LoginService} from "../../providers/login-service";
import {AuthService} from "../../providers/auth-service";
import {JwtHelper} from "angular2-jwt";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[LoginService]
})
export class HomePage {

  username: string;

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private readonly jwtHelper: JwtHelper,
              private readonly authService: AuthService) {

    this.authService.authUser.subscribe(jwt => {
      if (jwt) {
        const decoded = this.jwtHelper.decodeToken(jwt);
        this.username = decoded.sub
      }
      else {
        this.username = null;
      }
    });

  }

  loadHirePage(){
    this.navCtrl.push(HireStep1);
  }

  loadRentPage(){
    this.navCtrl.push(RentStep1);
  }

  loadNotificationsPage(){
    this.navCtrl.push(CustomerNotifications);
  }

  logout() {
    this.authService.logout();
  }


}

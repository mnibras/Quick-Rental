import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {HireStep1} from '../hire-step1/hire-step1';
import {Login} from '../login/login';
import {LoginService} from "../../providers/login-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[LoginService]
})
export class HomePage {

  constructor(public navCtrl: NavController, private loginService: LoginService, private loadingCtrl: LoadingController) {

  }

  loadHirePage(){
    this.navCtrl.push(HireStep1);
  }

  logoutUser(){
      this.loginService.logoutUser().then(() =>{
          this.navCtrl.setRoot(Login);
      });

      let loader = this.loadingCtrl.create({
        dismissOnPageChange: true,
        content: "Logout..."
      });

      loader.present();

  }

}

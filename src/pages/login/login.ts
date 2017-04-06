import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Register} from "../register/register";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onSubmitLogin(){
      this.navCtrl.push(HomePage);
  }

  onLoadSignUp(){
    this.navCtrl.push(Register);
  }

  onLoadAdminDashboard(){
    this.navCtrl.push(AdminDashboard);
  }

}

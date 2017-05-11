import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
//import { HomePage } from '../home/home';
import {Register} from "../register/register";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";
//import {NgForm} from "@angular/forms";
import {LoginService} from "../../providers/login-service";

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
  providers:[LoginService]
})
export class Login {
  user = {
    fullname : '',
    email : '',
    password : '',
    address : '',
    phone : '',
    type: ''
  }

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController,
       private loginService: LoginService, public alertCtrl: AlertController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');


  }

  onSubmitLogin(formData){
    this.navCtrl.push(AdminDashboard);
  }

  onLoadSignUp(){
    this.navCtrl.push(Register);
  }

}

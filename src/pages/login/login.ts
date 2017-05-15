import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import {Register} from "../register/register";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";
//import {NgForm} from "@angular/forms";
import {LoginService} from "../../providers/login-service";
import {AuthService} from "../../providers/auth-service";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(private readonly navCtrl: NavController,
              private readonly loadingCtrl: LoadingController,
              private readonly authService: AuthService,
              private readonly toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onSubmitLogin(value:any){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    this.authService
      .login(value)
      .finally(() => loading.dismiss())
      .subscribe(
        () => {},
        err => this.handleError(err));
  }

  onLoadSignUp(){
    this.navCtrl.setRoot(Register);
  }

  handleError(error: any) {
    let message: string;
    if (error.status && error.status === 401) {
      message = 'Login failed';
    }
    else {
      message = `Unexpected error: ${error.statusText}`;
    }

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

}

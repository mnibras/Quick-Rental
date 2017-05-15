import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, LoadingController, ToastController} from 'ionic-angular';
import {Storage} from "@ionic/storage";

import {AuthService} from "../../providers/auth-service";
import {NgModel} from "@angular/forms";
import {User} from "../../app/model/user";

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  private user: User;

  @ViewChild('username')
  usernameModel: NgModel;

  constructor(private readonly navCtrl: NavController,
              private readonly authService: AuthService,
              private readonly loadingCtrl: LoadingController,
              private readonly toastCtrl: ToastController,
              private readonly storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  //loading pages
  onLoadLogin(){
    this.navCtrl.pop();
  }

  //submit pages
  signup(value: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Signing up ...'
    });

    loading.present();

    this.authService
      .signup(value)
      .finally(() => loading.dismiss())
      .subscribe(
        (jwt) => {
          this.showSuccesToast(jwt);

        },
        err => this.handleError(err));


  }

  private showSuccesToast(jwt) {
    if (jwt !== 'EXISTS') {
      const toast = this.toastCtrl.create({
        message: 'Sign up successful',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }
    else {
      const toast = this.toastCtrl.create({
        message: 'Username already registered',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();

      this.usernameModel.control.setErrors({'usernameTaken':true});
    }
  }

  handleError(error: any) {
    let message = `Unexpected error occurred`;

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }




}

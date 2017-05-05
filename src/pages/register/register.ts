import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home'
import {LoginService} from "../../providers/login-service";

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [LoginService]
})
export class Register {

  user = {
    fullname : '',
    email : '',
    password : '',
    address : '',
    phone : '',
    type: ''
  }

  constructor(public alertCtrl: AlertController, private loadingCtrl: LoadingController, public navCtrl: NavController, 
            public navParams: NavParams, private loginService: LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  //loading pages
  onLoadLogin(){
    this.navCtrl.pop();
  }

  //submit pages
  onSubmitSignUp(){
    console.log('user name : '+this.user.fullname);
    this.loginService.signUpUser(this.user)
      .then(authData => {
        //var userTpe = document.getElementById("userType");
        //if(userTpe == "")
          let alert = this.alertCtrl.create({
            title: 'New Account Created',
            subTitle: 'Thank You For Joining With Us!!! ',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.setRoot(HomePage);

      }, error => { 
          let alert = this.alertCtrl.create({
            title: 'Error in SignUp',
            subTitle: error.message,
            buttons: ['OK']
          });
          alert.present();
      });

      let loader = this.loadingCtrl.create({
        dismissOnPageChange: true,
        content: "Creating Account..."
      });

      loader.present();

    }




}

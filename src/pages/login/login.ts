import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Register} from "../register/register";
//import {AdminDashboard} from "../admin-dashboard/admin-dashboard";
import {NgForm} from "@angular/forms";
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

   // if(this.user.username == "admin" && this.user.password == "admin"){
     // this.navCtrl.push(AdminDashboard);
    //}else{
      //this.navCtrl.push(HomePage);
    //}

    //console.log('form Data ', formData.email);
    
    this.loginService.loginUser(formData.email, formData.password)
      .then(authData => {
        //var userTpe = document.getElementById("userType");
        //if(userTpe == "")
        
        this.navCtrl.setRoot(HomePage);
      }, error => {
         let alert = this.alertCtrl.create({
            title: 'Error On Login',
            subTitle: error.message,
            buttons: ['OK']
          });
          alert.present();
      });

      let loader = this.loadingCtrl.create({
        dismissOnPageChange: true,
        content: "Login..."
      });

      loader.present();
    
  }

  onLoadSignUp(){
    this.navCtrl.push(Register);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Register} from "../register/register";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";
import {NgForm} from "@angular/forms";

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
  user = {
    username : '',
    password : ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onSubmitLogin(form:NgForm){

    if(this.user.username == "admin" && this.user.password == "admin"){
      this.navCtrl.push(AdminDashboard);
    }else{
      this.navCtrl.push(HomePage);
    }
    
  }

  onLoadSignUp(){
    this.navCtrl.push(Register);
  }

}

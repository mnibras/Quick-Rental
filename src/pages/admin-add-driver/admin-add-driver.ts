import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";

/**
 * Generated class for the AdminAddDriver page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-add-driver',
  templateUrl: 'admin-add-driver.html',
})
export class AdminAddDriver {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddDriver');
  }

  submitToAddDrivers(form:NgForm){

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../app/model/user";

/**
 * Generated class for the AdminDriver page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-driver',
  templateUrl: 'admin-driver.html',
})
export class AdminDriver {
  public driver: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.driver = this.navParams.data.driver;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDriver');
  }

}

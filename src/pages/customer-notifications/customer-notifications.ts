import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerHireNotification } from '../customer-hire-notification/customer-hire-notification';
import {CustomerRentNotification} from '../customer-rent-notification/customer-rent-notification';

/**
 * Generated class for the CustomerNotifications page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-notifications',
  templateUrl: 'customer-notifications.html',
})
export class CustomerNotifications {

  tab1Root = CustomerHireNotification;
  tab2Root = CustomerRentNotification;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerNotifications');
  }

  //create tab view

}

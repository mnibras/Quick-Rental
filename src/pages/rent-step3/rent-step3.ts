import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CustomerRentNotification} from '../customer-rent-notification/customer-rent-notification';

/**
 * Generated class for the RentStep3 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rent-step3',
  templateUrl: 'rent-step3.html',
})
export class RentStep3 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentStep3');
  }

  submitRentDetails(formData){
    //call service
    //alert
    this.navCtrl.push(CustomerRentNotification);
  }

}

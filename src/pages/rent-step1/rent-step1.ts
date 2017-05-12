import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HireStep2} from '../hire-step2/hire-step2';

/**
 * Generated class for the RentStep1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rent-step1',
  templateUrl: 'rent-step1.html',
})
export class RentStep1 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentStep1');
  }

  viewVehicle(id: number){
    this.navCtrl.push(HireStep2);
    //call vehicle service and pass the values to rent step2

  }

}

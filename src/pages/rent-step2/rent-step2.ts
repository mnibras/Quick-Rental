import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HireStep3} from '../hire-step3/hire-step3';

/**
 * Generated class for the RentStep2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rent-step2',
  templateUrl: 'rent-step2.html',
})
export class RentStep2 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentStep2');
  }

  reserveVehicle(id){
    //call vehicle service
     this.navCtrl.push(HireStep3);

  }

}

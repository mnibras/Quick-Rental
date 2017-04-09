import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HireStep3} from '../hire-step3/hire-step3'


/**
 * Generated class for the HireStep2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hire-step2',
  templateUrl: 'hire-step2.html',
})
export class HireStep2 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HireStep2');
  }

  submitHireDate(){
    this.navCtrl.push(HireStep3);
  }

}

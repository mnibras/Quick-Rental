import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the DriverMoreOptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-driver-more-option-page',
  templateUrl: 'driver-more-option-page.html',
})
export class DriverMoreOptionPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverMoreOptionPage');
  }

  onAction(action: string) {
    this.viewCtrl.dismiss({action: action});
  }

}

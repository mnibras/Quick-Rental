import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the RentMoreOptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rent-more-option-page',
  templateUrl: 'rent-more-option-page.html',
})
export class RentMoreOptionPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentMoreOptionPage');
  }

  onAction(action: string) {
    this.viewCtrl.dismiss({action: action});
  }
}

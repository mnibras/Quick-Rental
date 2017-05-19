import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the HireMoreOptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hire-more-option-page',
  templateUrl: 'hire-more-option-page.html',
})
export class HireMoreOptionPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HireMoreOptionPage');
  }

  onAction(action: string) {
    this.viewCtrl.dismiss({action: action});
  }
}

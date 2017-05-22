import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the VehicleMoreOptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vehicle-more-option-page',
  templateUrl: 'vehicle-more-option-page.html',
})
export class VehicleMoreOptionPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleMoreOptionPage');
  }

  onAction(action: string) {
    this.viewCtrl.dismiss({action: action});
  }
}

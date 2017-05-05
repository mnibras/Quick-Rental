import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CustomerHireNotification } from '../customer-hire-notification/customer-hire-notification';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the HireStep3 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hire-step3',
  templateUrl: 'hire-step3.html',
})
export class HireStep3 {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HireStep3');
  }

  confirmHireCar(){
    //confirmed hire car
    this.showAlert();
    this.navCtrl.push(CustomerHireNotification);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hire Car Confirmed',
      subTitle: 'Your request is confirmed, Thank you! ',
      buttons: ['OK']
    });
    alert.present();
  }

  cancelHireRequet(){
    this.navCtrl.push(HomePage);
  }

}

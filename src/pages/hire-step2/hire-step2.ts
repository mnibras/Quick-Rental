import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {HireStep3} from '../hire-step3/hire-step3'
import { HomePage } from '../home/home';


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
  public location: String;
  public destination: String;

  hire = {
    id: 0,
    amount:0,
    bookingSeats:0,
    description: '',
    destination: '',
    endMilage: 0,
    hireDate: '',
    hireTime: '',
    finished:false,
    location: '',
    startMilage: 0,
    status:1,

    customer: null,
    driver: null,
    vehicle: null,

  }

  constructor(public navCtrl: NavController,
              public params: NavParams,
              public loadingCtrl: LoadingController) {
    this.hire.location = params.get('location');
    this.hire.destination = params.get('destination');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HireStep2');

  }

  submitHireDetails(formData){

    this.hire.hireDate = formData.hireDate;
    this.hire.hireTime = formData.hireTime;

    var bookingSeatsArray = formData.bookingSeats;
    this.hire.bookingSeats = bookingSeatsArray[0];

    //this.presentLoadingDefault();

    this.navCtrl.push(HireStep3,{
      hire: this.hire
    });
  }

  cancelHireRequet(){
    this.navCtrl.popTo(HomePage);
  }


}

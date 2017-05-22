import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {HireStep2} from '../hire-step2/hire-step2'
import { HomePage } from '../home/home';


/**
 * Generated class for the HireStep1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hire-step1',
  templateUrl: 'hire-step1.html',
})
export class HireStep1 {


  constructor(public navCtrl: NavController,
              public navParams: NavParams,) {

  }

  ionViewDidLoad() {
   
  }


  submitHireLocation(formData){
      this.navCtrl.push(HireStep2, {
        location: formData.location,
        destination: formData.destination
      });
      
  }

  cancelHireRequet(){
    this.navCtrl.popTo(HomePage);
  }

  

}

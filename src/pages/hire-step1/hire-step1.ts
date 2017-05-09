import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {HireStep2} from '../hire-step2/hire-step2'


declare var google;

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
  @ViewChild('map') mapElemnt;
  map:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap(){
    let letLang = new google.map.LatLng(6.927079,	79.861244);

    let mapOptions = {
      center: letLang,
      zoom: 15,
      mapTypeId: google.map.mapTypeId.ROADMAP
    };

    this.map = new google.map.Map(this.mapElemnt.nativeElement, mapOptions);
  }

  submitHireLocation(formData){
      this.navCtrl.push(HireStep2, {
        location: formData.location,
        destination: formData.destination
      });
      this.navCtrl.push(HireStep2);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HireStep1} from '../hire-step1/hire-step1'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loadHirePage(){
    this.navCtrl.push(HireStep1);
  }

}

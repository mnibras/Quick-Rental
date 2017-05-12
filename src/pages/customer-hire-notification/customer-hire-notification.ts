import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdminHireService } from '../../providers/admin-hire-service';
import { Hire } from "../../app/model/hire";

/**
 * Generated class for the CustomerHireNotification page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-hire-notification',
  templateUrl: 'customer-hire-notification.html',
})
export class CustomerHireNotification {

  public hireList: Hire[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public adminHireService: AdminHireService) {
            
  }

  ngOnInit(){
    this.adminHireService.getListOfHireDetails()
                         .subscribe(
                                response =>{
                                  this.hireList = response;
                                  console.log(JSON.stringify(response));
                                },
                                err => {
                                    console.log("Error : "+err);
                                });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerHireNotification');
  }

  hireNotificationClose(){
    this.navCtrl.push(HomePage);
  }

}

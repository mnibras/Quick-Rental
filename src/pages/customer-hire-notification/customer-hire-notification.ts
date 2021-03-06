import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ViewHire } from '../view-hire/view-hire';
import { AdminHireService } from '../../providers/admin-hire-service';
import { Hire } from "../../app/model/hire";
import {AuthService} from "../../providers/auth-service";
import {JwtHelper} from "angular2-jwt";

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
  public customerId: number


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public adminHireService: AdminHireService,
              private readonly jwtHelper: JwtHelper,
              private readonly authService: AuthService) {
          
      this.authService.authUser.subscribe(jwt => {
          if (jwt) {
            const decoded = this.jwtHelper.decodeToken(jwt);
            this.customerId = decoded.userId;
          }
          else {
            this.customerId = 0;
          }
      });
  }

  ngOnInit(){
   let loading = this.loadingCtrl.create({
      content: 'Loading Notifications...'
    });

    loading.present();

    this.adminHireService.getHireDetailsByUser(this.customerId)
                         .subscribe(
                                response =>{
                                  loading.dismiss();
                                  this.hireList = response;
                                  console.log(JSON.stringify(response));
                                },
                                err => {
                                    console.log("Error : "+err);
                                });
  }


  viewHire(id: number){
    this.navCtrl.push(ViewHire,{
      hireId: id
    })
  }


 


  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerHireNotification');
  }

  hireNotificationClose(){
    this.navCtrl.popTo(HomePage);
  }

}

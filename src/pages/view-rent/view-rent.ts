import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AdminRentService } from '../../providers/admin-rent-service';
import { CustomerRentNotification } from '../customer-rent-notification/customer-rent-notification';
import { Rent } from "../../app/model/rent";
import { HomePage } from '../home/home';
import {AuthService} from "../../providers/auth-service";
import {JwtHelper} from "angular2-jwt";


/**
 * Generated class for the ViewRent page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-view-rent',
  templateUrl: 'view-rent.html',
})
export class ViewRent {

  public customerId :number;
  public rentId: number;
  public rent: Rent

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public adminRentService: AdminRentService,
              private readonly jwtHelper: JwtHelper,
              private readonly authService: AuthService) {
            
        this.rentId = navParams.get('rentId');
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRent');
  }

  ngOnInit(){
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();
    this.adminRentService.getRentDetails(this.rentId)
                         .subscribe(
                                response =>{
                                  loading.dismiss();
                                  this.rent = response;
                                  console.log(JSON.stringify(response));
                                  
                                },
                                err => {
                                  loading.dismiss();
                                    console.log("Error : "+err);
                                });
  }

  deleteRent(id:number){
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to delete this rent?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            let loading = this.loadingCtrl.create({
                content: 'Deleting...'
            });

            loading.present();
            this.adminRentService.removeRentDetails(id)
                         .subscribe(
                              response =>{
                                  console.log(response);
                                  console.log('Rent deleted');
                                  loading.dismiss();
                                  this.navCtrl.setRoot(HomePage);
                                  this.showAlert('Notice','Rent Deleted Succuss');
                              },
                              err => {
                                    loading.dismiss();
                                    this.navCtrl.setRoot(HomePage);
                                    this.showAlert('Notice','Rent Deleted Succuss');
                                });
                         
            
          }
        }
      ]
    });
    alert.present();

    
  }


  showAlert(title:string, subTitle:string) {
    
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  closeViewRent(){
    this.navCtrl.popTo(CustomerRentNotification);
  }

}

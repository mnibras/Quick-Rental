import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import { AdminHireService } from '../../providers/admin-hire-service';
import { Hire } from "../../app/model/hire";
import { CustomerHireNotification } from '../customer-hire-notification/customer-hire-notification';
import { HomePage } from '../home/home';

/**
 * Generated class for the ViewHire page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-view-hire',
  templateUrl: 'view-hire.html',
})
export class ViewHire {

  public customerId = 100;
  public hireId: number;
  public hire: Hire;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public adminHireService: AdminHireService) {

          this.hireId = navParams.get('hireId');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewHire');
  }

  ngOnInit(){
    
      let loading = this.loadingCtrl.create({
        content: 'Loading...'
      });
      loading.present();
      this.adminHireService.getHireDetails(this.hireId)
                         .subscribe(
                                response =>{
                                  loading.dismiss();
                                  this.hire = response;
                                  console.log(JSON.stringify(response));
                                },
                                err => {
                                    loading.dismiss();
                                    console.log("Error : "+err);
                          });

  }


  deleteHire(id:number){
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to delete this hire?',
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
            this.adminHireService.removeHireDetails(id)
                         .subscribe(
                              response =>{
                                  loading.dismiss();
                                  console.log('delete response');
                                  this.showAlert();
                                  this.navCtrl.popTo(HomePage);
                             },
                              err => {
                                    loading.dismiss();
                                    this.showAlert();
                                    this.navCtrl.popTo(HomePage);
                                });
            
          }
        }
      ]
    });
    alert.present();
   
  }


  showAlert() {
    
    let alert = this.alertCtrl.create({
      title: 'Notice',
      subTitle: 'This Hire is deleted succussfully  ',
      buttons: ['OK']
    });
    alert.present();
  }


  closeViewHire(){
    this.navCtrl.popTo(CustomerHireNotification);
  }



}

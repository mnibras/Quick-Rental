import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdminHireService } from '../../providers/admin-hire-service';
import { CustomerService } from '../../providers/customer-service';
import { User } from '../../app/model/user'

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
  
  public description: String;
  public customerId: number;
  public customer: User;

  hire = {
    id: 0,
    amount:0,
    bookingSeats:0,
    description: '',
    destination: '',
    endMilage: 0,
    hireDate: '',
    hireTime: '',
    isFinished:0,
    location: '',
    startMilage: 0,
    status:1,

    customer: null,
    driver: null,
    vehicle: null,
    
  
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              private adminHireService: AdminHireService,
              private customerService: CustomerService) {

    this.hire = navParams.get('hire');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HireStep3');
  }

  confirmHireCar(formData){
    let loading = this.loadingCtrl.create({
      content: 'Requesting Hire Vehicle...'
    });

    loading.present();
    this.hire.description = formData.description;

    this.customerId = 100;
    
    this.adminHireService.addHireDetails(this.hire, this.customerId)
                          .subscribe(
                              response =>{
                                  loading.dismiss();
                                  this.showAlert();
                                  console.log(JSON.stringify(response));
                                  this.navCtrl.push(HomePage);
                              });

   
  }


  showAlert() {
    
    let alert = this.alertCtrl.create({
      title: 'Hire Car requested',
      subTitle: 'Your request is processing, Notification will reciewed when confirmed ',
      buttons: ['OK']
    });
    alert.present();
  }


  cancelHireRequet(){
    this.navCtrl.popTo(HomePage);
  }

}

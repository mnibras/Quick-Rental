import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CustomerHireNotification } from '../customer-hire-notification/customer-hire-notification';
import { AlertController } from 'ionic-angular';
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
              private adminHireService: AdminHireService,
              private customerService: CustomerService) {

    this.hire = navParams.get('hire');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HireStep3');
  }

  confirmHireCar(formData){
    this.hire.description = formData.description;

    this.customerId = 100;
    this.getCustomer(this.customerId);
    this.hire.customer = this.customer;

    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(this.hire.customer);
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    

    this.adminHireService.addHireDetails(this.hire)
                          .subscribe(
                              (response:any) => console.log(response)
                          );
                     
    this.showAlert();
    this.navCtrl.push(CustomerHireNotification);
  }


  getCustomer(id: number){
    this.customerService.getCustomer(id).subscribe(
                                data => {
                                    this.customer = data;
                                    console.log(JSON.stringify(data));
                                },
                                err => {
                                    console.log("Error : "+err);
                                });
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

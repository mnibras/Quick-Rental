import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RentStep3 } from '../rent-step3/rent-step3';
import { AdminCarService } from '../../providers/admin-car-service';
import { Vehicle } from '../../app/model/vehicle'
import { HomePage } from '../home/home';

/**
 * Generated class for the RentStep1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rent-step1',
  templateUrl: 'rent-step1.html',
})
export class RentStep1 {

  public availableVehicles: Vehicle[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public adminCarService: AdminCarService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentStep1');
  }

  ngOnInit(){
    this.getAllAvailableVehicles();
  }

  getAllAvailableVehicles(){
      let loading = this.loadingCtrl.create({
         content: 'Loading Available Vehicles...'
      });
      loading.present();
      this.adminCarService.getAvailableVehicles()
                              .subscribe(
                                response =>{
                                  loading.dismiss();
                                  this.availableVehicles = response;
                                  console.log(JSON.stringify(response));
                                },
                                err => {
                                    loading.dismiss();
                                    console.log("Error : "+err);
                                });

  }

  
  pickVehicle(id: number){
    
    this.navCtrl.push(RentStep3,{
      pickedVehicleId: id
    });

  }

  cancelRentRequet(){
    this.navCtrl.popTo(HomePage);
  }


}

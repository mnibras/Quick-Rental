import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, PopoverController} from 'ionic-angular';

import { Vehicle } from "../../app/model/vehicle";
import {AdminCarService} from "../../providers/admin-car-service";
import {AdminVehicle} from "../admin-vehicle/admin-vehicle";
import {AdminAddCar} from "../admin-add-car/admin-add-car";
import {AdminUpdateCar} from "../admin-update-car/admin-update-car";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";
import {VehicleMoreOptionPage} from "../vehicle-more-option-page/vehicle-more-option-page";

/**
 * Generated class for the AdminAvailableCars page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-available-cars',
  templateUrl: 'admin-available-cars.html',
})
export class AdminAvailableCars {
  public vehiclesList: Vehicle[];
  public isVehicleListEmpty: boolean;
  public pageTitle:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              public adminCarService: AdminCarService,
              private loadingCtrl: LoadingController) {
    this.isVehicleListEmpty = false;
    this.pageTitle ='All Vehicles';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAvailableCars');
  }

  ngOnInit()
  {
    this.getListOfVehicles();
  }

  ionViewWillEnter() {
    this.getListOfVehicles();
    this.pageTitle ='All Vehicles';
  }



  onShowOptions(event: MouseEvent) {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    const popover = this.popoverCtrl.create(VehicleMoreOptionPage);
    popover.present({ev: event});

    popover.onDidDismiss(
      data => {
        if (!data) {
          return;
        }
        if (data.action == 'all') {
          loading.present();
          this.adminCarService.getAllVehiclesList().subscribe(
            data => {
              loading.dismiss();
              this.vehiclesList = data;
              this.pageTitle = "All Vehicles";
              this.isVehicleListEmpty = this.vehiclesList[0] == null? true : false;
              console.log(JSON.stringify(this.vehiclesList));
            },
            err => {
              loading.dismiss();
              this.vehiclesList = [];
              this.isVehicleListEmpty = true;
              this.pageTitle = "All Vehicles";
              console.log("Error : "+err);
            });
        } else if (data.action == 'available') {
          loading.present();
          this.adminCarService.getAvailableVehiclesList().subscribe(
            data => {
              loading.dismiss();
              this.vehiclesList = data;
              this.pageTitle = "Available Vehicles";
              this.isVehicleListEmpty = this.vehiclesList[0] == null? true : false;

              console.log(JSON.stringify(this.vehiclesList));
            },
            err => {
              loading.dismiss();
              this.vehiclesList = [];
              this.isVehicleListEmpty = true;
              this.pageTitle = "Available Vehicles";
              console.log("Error : "+err);
            });
        }else if (data.action == 'unavailable') {
          loading.present();
          this.adminCarService.getUnAvailableVehiclesList().subscribe(
            data => {
              loading.dismiss();
              this.vehiclesList = data;
              this.pageTitle = "Unavailable Vehicles";
              this.isVehicleListEmpty = this.vehiclesList[0] == null? true : false;

              console.log(JSON.stringify(this.vehiclesList));
            },
            err => {
              loading.dismiss();
              this.vehiclesList = [];
              this.isVehicleListEmpty = true;
              this.pageTitle = "Unavailable Vehicles";
              console.log("Error : "+err);
            });
        }
      }
    );

  }


  getListOfVehicles(){

    this.adminCarService.getAllVehiclesList().subscribe(
                                data => {
                                    this.vehiclesList = data;
                                  this.pageTitle = "All Vehicles";
                                  this.isVehicleListEmpty = this.vehiclesList[0] == null? true : false;
                                    console.log(JSON.stringify(this.vehiclesList));
                                },
                                err => {
                                    this.vehiclesList = [];
                                    console.log("Error : "+err);
                                });
  }

  getListAvailableOfVehicles(){
    this.adminCarService.getAvailableVehiclesList().subscribe(
      data => {
        this.vehiclesList = data;
        this.pageTitle = "Available Vehicles";
        this.isVehicleListEmpty = this.vehiclesList[0] == null? true : false;
        console.log(JSON.stringify(this.vehiclesList));
      },
      err => {
        this.vehiclesList = [];
        console.log("Error : "+err);
      });
  }

  loadAddVehiclePage(){
    this.navCtrl.push(AdminAddCar);
  }

  viewVehicle(vehicle:Vehicle){
    this.navCtrl.push(AdminVehicle,{vehicle:vehicle});
  }

  updateVehicle(vehicle:Vehicle){
    this.navCtrl.push(AdminUpdateCar,{vehicle:vehicle});
  }

  deleteVehicle(id:number){
    this.adminCarService.removeVehicle(id).subscribe(
                          data => {
                            console.log(JSON.stringify(data));
                          },
                          err => {
                            console.log("Error : "+err);
                          });

    this.navCtrl.popTo(AdminDashboard);
  }

}

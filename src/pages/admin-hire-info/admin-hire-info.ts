import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import {Hire} from "../../app/model/hire";
import {AdminCarService} from "../../providers/admin-car-service";
import {Vehicle} from "../../app/model/vehicle";
import {AdminDriverService} from "../../providers/admin-driver-service";
import {User} from "../../app/model/user";
import {AdminHireService} from "../../providers/admin-hire-service";
import {NgForm} from "@angular/forms";
import {AdminHireHistory} from "../admin-hire-history/admin-hire-history";

/**
 * Generated class for the AdminHireInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-hire-info',
  templateUrl: 'admin-hire-info.html',
})
export class AdminHireInfo {
  public hire: Hire;

  public isVehicleListEmpty:boolean;
  public isDriverListEmpty:boolean;
  public isSetSelectedDriver:boolean = false;
  public isSetSelectedVehicle:boolean = false;

  public vehiclesList: Vehicle[];
  public driversList: User[];

  public selectedVehicle:Vehicle;
  public selectedDriver:User;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public adminCarService:AdminCarService,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public adminDriverService:AdminDriverService,
              public adminHireService:AdminHireService) {


    this.hire = this.navParams.data.hire;
    this.isVehicleListEmpty = false;
    this.isDriverListEmpty = false;
    this.selectedVehicle = new Vehicle();
    this.selectedDriver = new User();

    this.getListAvailableOfVehicles();
    this.getListAvailableOfDrivers();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHireInfo');
  }

  getListAvailableOfVehicles(){
    this.adminCarService.getAvailableVehiclesList().subscribe(
      data => {
        this.vehiclesList = data;
        this.isVehicleListEmpty = this.vehiclesList[0] == null? true : false;
      },
      err => {
        this.vehiclesList = [];
        console.log("Error : "+err);
      });
  }

  getListAvailableOfDrivers(){
    this.adminDriverService.getAvailableDriversList().subscribe(
      data => {
        this.driversList = data;
        this.isDriverListEmpty = this.driversList[0] == null? true : false;
      },
      err => {
        this.driversList = [];
        console.log("Error : "+err);
      });
  }

  acceptHire(hire:Hire){
    let loading = this.loadingCtrl.create({
      content: 'You have accepted the details...'
    });
    loading.present();
    hire.status = 2;
    hire.driver = this.selectedDriver;
    hire.vehicle = this.selectedVehicle;
    hire.startMilage = this.selectedVehicle.currentMillage;
    this.adminHireService.acceptHireDetails(hire)
      .subscribe(
        (data:any) => {
          loading.dismiss();
          this.navCtrl.popTo(AdminHireHistory);
          console.log(data);
        },
        err => {
          loading.dismiss();
          console.log("Error : "+err);
        });
  }

  rejectHire(hire:Hire){
    let loading = this.loadingCtrl.create({
      content: 'You have rejected the details...'
    });
    loading.present();
    hire.status = 3;
    this.adminHireService.rejectHireDetails(hire)
      .subscribe(
        (data:any) => {
          loading.dismiss();
          this.navCtrl.popTo(AdminHireHistory);
          console.log(data);
        }
      );
  }

  setSelectedDriver(driver:User){
    this.isSetSelectedDriver = true;
    this.selectedDriver = driver;
    console.log("setSelectedDriver : "+ this.selectedDriver.fullname);
  }

  setSelectedVehicle(vehicle:Vehicle){
    this.isSetSelectedVehicle = true;
    this.selectedVehicle = vehicle;
    console.log("setSelectedVehicle : "+ this.selectedVehicle.vehicleNo);
  }

  completeHire(form:NgForm){
    let loading = this.loadingCtrl.create({
      content: 'Complete Hire details...'
    });
    loading.present();

    this.hire.finished = true;
    this.hire.vehicle.currentMillage = this.hire.endMilage;
    this.hire.amount = this.hire.vehicle.hirePerMilage * (this.hire.endMilage - this.hire.startMilage);
    this.adminHireService.completeHireDetails(this.hire)
      .subscribe(
        (data:any) => {
          loading.dismiss();
          this.navCtrl.popTo(AdminHireHistory);
          this.showAlert();
          console.log(data);
        }
      );
  }

  showAlert() {

    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Hire details is completed.. ',
      buttons: ['OK']
    });
    alert.present();
  }

}

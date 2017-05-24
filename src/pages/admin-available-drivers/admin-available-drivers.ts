import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, LoadingController} from 'ionic-angular';

import {User} from "../../app/model/user";
import {AdminDriverService} from "../../providers/admin-driver-service";
import {AdminAddDriver} from "../admin-add-driver/admin-add-driver";
import {AdminDriver} from "../admin-driver/admin-driver";
import {AdminUpdateDriver} from "../admin-update-driver/admin-update-driver";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";
import {DriverMoreOptionPage} from "../driver-more-option-page/driver-more-option-page";


/**
 * Generated class for the AdminAvailableDrivers page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-available-drivers',
  templateUrl: 'admin-available-drivers.html',
})
export class AdminAvailableDrivers {
  public driverList:User[]=[];
  public isDriverListEmpty: boolean;
  public pageTitle:string ;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public adminDriverService:AdminDriverService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController) {
    this.getDriverDetails();
    this.isDriverListEmpty = false;
    this.pageTitle ='All Drivers';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAvailableDrivers');
  }

  ngOnInit()
  {
    this.getDriverDetails();
  }

  ionViewWillEnter() {
    this.getDriverDetails();
    this.pageTitle ='All Drivers';
  }

  onShowOptions(event: MouseEvent) {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    const popover = this.popoverCtrl.create(DriverMoreOptionPage);
    popover.present({ev: event});

    popover.onDidDismiss(
      data => {
        if (!data) {
          return;
        }
        if (data.action == 'all') {

          loading.present();
          this.adminDriverService.getAllDriversList().subscribe(
            data => {
              loading.dismiss();
              if(data != null)
                this.driverList = data;
              this.pageTitle = "All Drivers";
              this.isDriverListEmpty = this.driverList[0] == null? true : false;
              console.log(JSON.stringify(this.driverList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Available Drivers";
              this.driverList = [];
              this.isDriverListEmpty = true;
              console.log("Error : "+err);
            });
        } else if (data.action == 'available') {
          loading.present();
          this.adminDriverService.getAvailableDriversList().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Available Drivers";
              if(data != null)
                this.driverList = data;
              this.isDriverListEmpty = this.driverList[0] == null? true : false;
              console.log(JSON.stringify(this.driverList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Available Drivers";
              this.driverList = [];
              this.isDriverListEmpty = true;
              console.log("Error : "+err);
            });
        }else if (data.action == 'unavailable') {
          this.pageTitle = "Unavailable Drivers";

          loading.present();
          this.adminDriverService.getUnAvailableDriversList().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Unavailable Drivers";
              if(data != null)
                this.driverList = data;
              this.isDriverListEmpty = this.driverList[0] == null? true : false;
              console.log(JSON.stringify(this.driverList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Unavailable Drivers";
              this.driverList = [];
              this.isDriverListEmpty = true;
              console.log("Error : "+err);
            });
        }
      }
    );

  }

  getDriverDetails(){
    let loading = this.loadingCtrl.create({
      content: 'fetching driver details...'
    });
    loading.present();
    this.adminDriverService.getAllDriversList().subscribe(
      data => {
        loading.dismiss();
        this.pageTitle = "All Drivers";
        if(data != null)
          this.driverList = data;
        this.isDriverListEmpty = this.driverList[0] == null? true : false;

      },
      err => {
        loading.dismiss();
        this.driverList = [];
        this.isDriverListEmpty = true;
        console.log("Error : "+err);
      });
  }

  loadAddDriverPage(){
    this.navCtrl.push(AdminAddDriver);
  }

  viewDriver(driver:User){
    this.navCtrl.push(AdminDriver,{driver:driver});
  }

  updateDriver(driver:User){
    console.log("updateDriver : "+ JSON.stringify(driver));

    this.navCtrl.push(AdminUpdateDriver,{driver:driver});
  }

  deleteDriver(id:number){
    let loading = this.loadingCtrl.create({
      content: 'Deleting driver details...'
    });
    loading.present();
    this.adminDriverService.removeDriver(id).subscribe(
      data => {
        loading.dismiss();
        console.log(JSON.stringify(data));
        this.navCtrl.popTo(AdminDashboard);

        //this.getDriverDetails();
      },
      err => {
        loading.dismiss();
        console.log("Error : "+err);
      });

    this.navCtrl.popTo(AdminDashboard);

  }
}

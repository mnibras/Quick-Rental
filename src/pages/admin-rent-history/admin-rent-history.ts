import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, LoadingController} from 'ionic-angular';
import {AdminRentInfo} from "../admin-rent-info/admin-rent-info";
import {Rent} from "../../app/model/rent";
import {AdminRentService} from "../../providers/admin-rent-service";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";
import {RentMoreOptionPage} from "../rent-more-option-page/rent-more-option-page";

/**
 * Generated class for the AdminRentHistory page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-rent-history',
  templateUrl: 'admin-rent-history.html',
})
export class AdminRentHistory {

  public rentList: Rent[];
  public pageTitle:string;
  public isRentListEmpty:boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public adminRentService:AdminRentService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController) {

    this.pageTitle = "All Hire List";
    this.isRentListEmpty = false;
    this.getAllRentDetails();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminRentHistory');
  }

  viewRent(rent:Rent){
    this.navCtrl.push(AdminRentInfo,{rent:rent});
  }

  getAllRentDetails(){
    this.adminRentService.getListOfRentDetails().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.rentList = data;
        this.pageTitle = "All Rent List";
        this.isRentListEmpty = this.rentList[0] == null? true : false;

      },
      err => {
        this.rentList = [];
        this.isRentListEmpty = false;
        console.log("Error : "+err);
      });
  }

  deleteRent(id:number){
    this.adminRentService.removeRentDetails(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
      },
      err => {
        console.log("Error : "+err);
      });

    this.navCtrl.popTo(AdminDashboard);
  }

  onShowOptions(event: MouseEvent) {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    const popover = this.popoverCtrl.create(RentMoreOptionPage);
    popover.present({ev: event});

    popover.onDidDismiss(
      data => {
        if (!data) {
          return;
        }
        if (data.action == 'all') {

          loading.present();
          this.adminRentService.getListOfRentDetails().subscribe(
            data => {
              loading.dismiss();
              this.rentList = data;
              this.pageTitle = "All Rents";
              this.isRentListEmpty = this.rentList[0] == null? true : false;
              console.log(JSON.stringify(this.rentList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "All Rents";
              this.rentList = [];
              this.isRentListEmpty = true;
              console.log("Error : "+err);
            });
        } else if (data.action == 'pending') {
          loading.present();
          this.adminRentService.getListOfPendingRentDetails().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Pending Rents";
              this.rentList = data;
              this.isRentListEmpty = this.rentList[0] == null? true : false;
              console.log(JSON.stringify(this.rentList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Pending Rents";
              this.rentList = [];
              this.isRentListEmpty = true;
              console.log("Error : "+err);
            });
        }else if (data.action == 'accepted') {
          loading.present();
          this.adminRentService.getListOfAcceptedRentDetails().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Accepted Rents";
              this.rentList = data;
              this.isRentListEmpty = this.rentList[0] == null? true : false;
              console.log(JSON.stringify(this.rentList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Accepted Rents";
              this.rentList = [];
              this.isRentListEmpty = true;
              console.log("Error : "+err);
            });
        }else if (data.action == 'rejected') {

          loading.present();
          this.adminRentService.getListOfRejectedRentDetails().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Rejected Rents";
              this.rentList = data;
              this.isRentListEmpty = this.rentList[0] == null? true : false;
              console.log(JSON.stringify(this.rentList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Rejected Rents";
              this.rentList = [];
              this.isRentListEmpty = true;
              console.log("Error : "+err);
            });
        }else if (data.action == 'completed') {

          loading.present();
          this.adminRentService.getListOfCompletedRentDetails().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Completed Rents";
              this.rentList = data;
              this.isRentListEmpty = this.rentList[0] == null? true : false;
              console.log(JSON.stringify(this.rentList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Completed Rents";
              this.rentList = [];
              this.isRentListEmpty = true;
              console.log("Error : "+err);
            });
        }
      }
    );

  }
}

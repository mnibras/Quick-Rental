import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, PopoverController} from 'ionic-angular';
import {AdminHireService} from "../../providers/admin-hire-service";
import {Hire} from "../../app/model/hire";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";
import {AdminHireInfo} from "../admin-hire-info/admin-hire-info";
import {AdminUpdateHireDetails} from "../admin-update-hire-details/admin-update-hire-details";
import {HireMoreOptionPage} from "../hire-more-option-page/hire-more-option-page";

/**
 * Generated class for the AdminHireHistory page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-hire-history',
  templateUrl: 'admin-hire-history.html',
})
export class AdminHireHistory {

  public hireList: Hire[];
  public pageTitle:string;
  public isHireListEmpty:boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public adminHireService:AdminHireService,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController) {
    this.pageTitle = "All Hire List";
    this.isHireListEmpty = false;
    this.getAllHireDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHireHistory');
  }

  getAllHireDetails(){
    this.adminHireService.getListOfHireDetails().subscribe(
      data => {
        this.hireList = data;
        this.pageTitle = "All Hire List";
        this.isHireListEmpty = this.hireList[0] == null? true : false;
        console.log(JSON.stringify(this.hireList));
      },
      err => {
        this.hireList = [];
        this.isHireListEmpty = false;
        console.log("Error : "+err);
      });
  }

  viewHire(hire:Hire){
    this.navCtrl.push(AdminHireInfo,{hire:hire});
  }

  updateHire(hire:Hire){
    this.navCtrl.push(AdminUpdateHireDetails,{hire:hire});
  }

  deleteHire(id:number){
    this.adminHireService.removeHireDetails(id).subscribe(
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
    const popover = this.popoverCtrl.create(HireMoreOptionPage);
    popover.present({ev: event});

    popover.onDidDismiss(
      data => {
        if (!data) {
          return;
        }
        if (data.action == 'all') {

          loading.present();
          this.adminHireService.getListOfHireDetails().subscribe(
            data => {
              loading.dismiss();
              this.hireList = data;
              this.pageTitle = "All Hires";
              this.isHireListEmpty = this.hireList[0] == null? true : false;
              console.log(JSON.stringify(this.hireList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "All Hires";
              this.hireList = [];
              this.isHireListEmpty = true;
              console.log("Error : "+err);
            });
        } else if (data.action == 'pending') {
          loading.present();
          this.adminHireService.getListOfPendingHireDetails().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Pending Hires";
              this.hireList = data;
              this.isHireListEmpty = this.hireList[0] == null? true : false;
              console.log(JSON.stringify(this.hireList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Pending Hires";
              this.hireList = [];
              this.isHireListEmpty = true;
              console.log("Error : "+err);
            });
        }else if (data.action == 'accepted') {
          loading.present();
          this.adminHireService.getListOfAcceptedHireDetails().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Accepted Hires";
              this.hireList = data;
              this.isHireListEmpty = this.hireList[0] == null? true : false;
              console.log(JSON.stringify(this.hireList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Accepted Hires";
              this.hireList = [];
              this.isHireListEmpty = true;
              console.log("Error : "+err);
            });
        }else if (data.action == 'rejected') {

          loading.present();
          this.adminHireService.getListOfRejectedHireDetails().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Rejected Hires";
              this.hireList = data;
              this.isHireListEmpty = this.hireList[0] == null? true : false;
              console.log(JSON.stringify(this.hireList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Rejected Hires";
              this.hireList = [];
              this.isHireListEmpty = true;
              console.log("Error : "+err);
            });
        }else if (data.action == 'completed') {

          loading.present();
          this.adminHireService.getListOfCompletedHireDetails().subscribe(
            data => {
              loading.dismiss();
              this.pageTitle = "Completed Hires";
              this.hireList = data;
              this.isHireListEmpty = this.hireList[0] == null? true : false;
              console.log(JSON.stringify(this.hireList));
            },
            err => {
              loading.dismiss();
              this.pageTitle = "Completed Hires";
              this.hireList = [];
              this.isHireListEmpty = true;
              console.log("Error : "+err);
            });
        }
      }
    );

  }

}

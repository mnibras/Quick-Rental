import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AdminHireService} from "../../providers/admin-hire-service";
import {Hire} from "../../app/model/hire";
import {AdminDashboard} from "../admin-dashboard/admin-dashboard";
import {AdminHireInfo} from "../admin-hire-info/admin-hire-info";
import {AdminUpdateHireDetails} from "../admin-update-hire-details/admin-update-hire-details";

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
              public adminHireService:AdminHireService) {
    this.pageTitle = "All Hire List";
    this.isHireListEmpty = false;
    this.getAllHireDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHireHistory');
  }

  getPendingHireDetails(){

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

  getAcceptedHireDetails(){

  }

  getRejectedHireDetails(){

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

}

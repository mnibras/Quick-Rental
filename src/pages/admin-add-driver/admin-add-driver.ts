import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";

import {User} from "../../app/model/user";
import {AdminDriverService} from "../../providers/admin-driver-service";

/**
 * Generated class for the AdminAddDriver page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-add-driver',
  templateUrl: 'admin-add-driver.html',
})
export class AdminAddDriver {
  private userListDto: User[];
  private userDto:User;
  private user = {
    name : '',
    email : '',
    password:'',
    address:'',
    phone:0,
    nic:'',
    userRole:'driver',
    licenseNo:''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public adminDriverService:AdminDriverService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddDriver');
  }

  

  submitToAddDrivers(form:NgForm){
    this.userDto.name = this.user.name;
    this.userDto.address = this.user.address;
    this.userDto.nic = this.user.nic;
    this.userDto.phone = this.user.phone;

    console.log("userDto.phone : "+ this.userDto.phone);

    this.adminDriverService.addDriver(this.userDto).subscribe(
                                userRes => {
                                    this.userListDto = userRes
                                }, 
                                err => {
                                    console.log(err);
                                });
  }

}

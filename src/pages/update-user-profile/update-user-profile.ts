import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../app/model/user";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../providers/auth-service";
import {JwtHelper} from "angular2-jwt";
import {UserService} from "../../providers/user-service";

/**
 * Generated class for the UpdateUserProfile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-update-user-profile',
  templateUrl: 'update-user-profile.html',
})
export class UpdateUserProfile {

  public user:User;
  userFullname:string;
  userRole:number;
  userId:number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService:UserService,
              private readonly authService: AuthService,
              private readonly jwtHelper: JwtHelper) {

    this.authService.authUser.subscribe(jwt => {
      if (jwt) {
        const decoded = this.jwtHelper.decodeToken(jwt);
        this.userFullname = decoded.sub;
        this.userRole = decoded.role;
        this.userId = decoded.userId;
      }
      else {
        this.user = null;
      }
    });
    this.user = new User();
    this.getUserDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUserProfile');
  }

  ngOnInit()
  {
    //this.getUserDetails();
  }

  ionViewWillEnter() {
    //this.getUserDetails();
  }

  getUserDetails(){
    console.log("(2) this.userId : "+this.userId);
    this.userService.getUser(this.userId ).subscribe(
      data => {
        this.user = data;
        console.log(JSON.stringify(data));
      },
      err => {
        console.log("Error : "+err);
      });
  }

  submitToUpdateUser(form:NgForm){
    this.user.userRole = this.userRole;

    console.log("submitToAddDriver : "+ JSON.stringify(this.user));
    this.userService.editUser(this.user)
      .subscribe(
        (data:any) => {
          console.log(data);
        }
      );
  }


}

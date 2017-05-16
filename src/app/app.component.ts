import {Component, ViewChild} from '@angular/core';
import {Platform, NavController, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {Login} from "../pages/login/login";
import {AdminDashboard} from "../pages/admin-dashboard/admin-dashboard";
import {AuthService} from "../providers/auth-service";
import {JwtHelper} from "angular2-jwt";
import {HomePage} from "../pages/home/home";
import {Register} from "../pages/register/register";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;
  loginPage = Login;
  registerPage = Register;
  adminPage = AdminDashboard;
  homePage = HomePage;
  isAuthenticated = false;
  usrRole = 0;
  userFullname = '';
  userEmail = '';

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar,
              private menuCtrl: MenuController,
              splashScreen: SplashScreen,
              private readonly authService: AuthService,
              private readonly jwtHelper: JwtHelper) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });



    this.authService.authUser.subscribe(jwt => {



      if (jwt) {
        this.isAuthenticated = true;
        const decoded = this.jwtHelper.decodeToken(jwt);
        this.usrRole = decoded.role;
        this.userFullname = decoded.fullname;
        this.userEmail = decoded.email;

        console.log(JSON.stringify("decoded : "+ decoded));

        if(this.usrRole == 1)
          this.rootPage = AdminDashboard;
        else if(this.usrRole ==2 )
          this.rootPage = HomePage;
      }
      else {
        this.rootPage = Login;
        this.usrRole = 0;
        this.isAuthenticated = false;
      }
    });

    //every time the application starts up it calls this function to checks if a JWT is stored locally
    this.authService.checkLogin();
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(Login);
  }



}


import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {Login} from "../pages/login/login";
import {AdminDashboard} from "../pages/admin-dashboard/admin-dashboard";
import {AuthService} from "../providers/auth-service";
import {JwtHelper} from "angular2-jwt";
import {HomePage} from "../pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;

  constructor(platform: Platform, statusBar: StatusBar,
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
        //console.log("jwt decodeToke : "+ JSON.stringify(this.jwtHelper.decodeToken(jwt).role));
        //let usrRole:any = JSON.stringify(this.jwtHelper.decodeToken(jwt).role);

        const decoded = this.jwtHelper.decodeToken(jwt);
        let usrRole:any = decoded.role;

        if(usrRole == 1)
          this.rootPage = AdminDashboard;
        else if(usrRole ==2 )
          this.rootPage = HomePage;
      }
      else {
        this.rootPage = Login;
      }
    });

    //every time the application starts up it calls this function to checks if a JWT is stored locally
    this.authService.checkLogin();
  }



}


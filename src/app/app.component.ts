import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import {Login} from "../pages/login/login";
import {HomePage} from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5hs7MdbxcfY1D22BVVhtB2pNoxPLY8Ak",
    authDomain: "quick-rental.firebaseapp.com",
    databaseURL: "https://quick-rental.firebaseio.com",
    projectId: "quick-rental",
    storageBucket: "quick-rental.appspot.com",
    messagingSenderId: "434099085659"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      this.rootPage = HomePage;
    } else{
      this.rootPage = Login;
    }
  });
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


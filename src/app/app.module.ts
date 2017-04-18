import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Login} from "../pages/login/login";
import {Register} from "../pages/register/register";
import {AdminDashboard} from "../pages/admin-dashboard/admin-dashboard";
import {AdminAddDriver} from "../pages/admin-add-driver/admin-add-driver";
import {AdminAddCar} from "../pages/admin-add-car/admin-add-car";
import {HireStep1} from "../pages/hire-step1/hire-step1";
import {HireStep2} from "../pages/hire-step2/hire-step2";
import {HireStep3} from "../pages/hire-step3/hire-step3";
import {CustomerHireNotification} from "../pages/customer-hire-notification/customer-hire-notification";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Register,
    AdminDashboard,
    HireStep1,
    HireStep2,
    HireStep3,
    AdminAddDriver,
    AdminAddCar,
    CustomerHireNotification
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Register,
    AdminDashboard,
    HireStep1,
    HireStep2,
    HireStep3,
    AdminAddDriver,
    AdminAddCar,
    CustomerHireNotification
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

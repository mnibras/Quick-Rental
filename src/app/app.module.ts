import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


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
import {RentStep1} from "../pages/rent-step1/rent-step1";
import {RentStep2} from "../pages/rent-step2/rent-step2";
import {RentStep3} from "../pages/rent-step3/rent-step3";
import {CustomerHireNotification} from "../pages/customer-hire-notification/customer-hire-notification";
import {CustomerRentNotification} from "../pages/customer-rent-notification/customer-rent-notification";
import {CustomerNotifications} from "../pages/customer-notifications/customer-notifications";



import {AdminRentDetails} from "../pages/admin-rent-details/admin-rent-details";
import {AdminNotifications} from "../pages/admin-notifications/admin-notifications";
import {AdminHireDetails} from "../pages/admin-hire-details/admin-hire-details";
import {AdminAvailableCars} from "../pages/admin-available-cars/admin-available-cars";
import {AdminAvailableDrivers} from "../pages/admin-available-drivers/admin-available-drivers";
import {AdminHireHistory} from "../pages/admin-hire-history/admin-hire-history";
import {AdminHireNotification} from "../pages/admin-hire-notification/admin-hire-notification";
import {AdminRentNotification} from "../pages/admin-rent-notification/admin-rent-notification";
import {AdminRentHistory} from "../pages/admin-rent-history/admin-rent-history";
import {AdminCarService} from "../providers/admin-car-service";
import {AdminDriverService} from "../providers/admin-driver-service";
import {AdminHireService} from "../providers/admin-hire-service";
import {LoginService} from "../providers/login-service";
import {UserService} from "../providers/user-service";
import {AdminVehicle} from "../pages/admin-vehicle/admin-vehicle";
import {AdminUpdateCar} from "../pages/admin-update-car/admin-update-car";
import {AdminDriver} from "../pages/admin-driver/admin-driver";
import {AdminUpdateDriver} from "../pages/admin-update-driver/admin-update-driver";


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
    RentStep1,
    RentStep2,
    RentStep3,
    AdminAddDriver,
    AdminAddCar,
    CustomerNotifications,
    CustomerHireNotification,
    CustomerRentNotification,
    AdminRentDetails,
    AdminNotifications,
    AdminHireDetails,
    AdminAvailableCars,
    AdminAvailableDrivers,
    AdminHireHistory,
    AdminHireNotification,
    AdminRentNotification,
    AdminRentHistory,
    AdminVehicle,
    AdminUpdateCar,
    AdminDriver,
    AdminUpdateDriver
  ],
  imports: [
    HttpModule,
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
    RentStep1,
    RentStep2,
    RentStep3,
    AdminAddDriver,
    AdminAddCar,
    CustomerNotifications,
    CustomerHireNotification,
    CustomerRentNotification,
    AdminRentDetails,
    AdminNotifications,
    AdminHireDetails,
    AdminAvailableCars,
    AdminAvailableDrivers,
    AdminHireHistory,
    AdminHireNotification,
    AdminRentNotification,
    AdminRentHistory,
    AdminVehicle,
    AdminUpdateCar,
    AdminDriver,
    AdminUpdateDriver
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdminCarService,
    AdminDriverService,
    AdminHireService,
    LoginService,
    UserService
  ]
})
export class AppModule {}

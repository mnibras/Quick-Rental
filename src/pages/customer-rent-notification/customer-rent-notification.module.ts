import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomerRentNotification } from './customer-rent-notification';

@NgModule({
  declarations: [
    CustomerRentNotification,
  ],
  imports: [
    //IonicModule.forChild(CustomerRentNotification),
  ],
  exports: [
    CustomerRentNotification
  ]
})
export class CustomerRentNotificationModule {}

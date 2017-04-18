import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { CustomerHireNotification } from './customer-hire-notification';

@NgModule({
  declarations: [
    CustomerHireNotification,
  ],
  imports: [
   // IonicModule.forChild(CustomerHireNotification),
  ],
  exports: [
    CustomerHireNotification
  ]
})
export class CustomerHireNotificationModule {}

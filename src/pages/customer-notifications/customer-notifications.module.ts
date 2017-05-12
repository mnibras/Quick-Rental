import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomerNotifications } from './customer-notifications';

@NgModule({
  declarations: [
    CustomerNotifications,
  ],
  imports: [
   // IonicModule.forChild(CustomerNotifications),
  ],
  exports: [
    CustomerNotifications
  ]
})
export class CustomerNotificationsModule {}

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminRentNotification } from './admin-rent-notification';

@NgModule({
  declarations: [
    AdminRentNotification,
  ],
  imports: [
    //IonicModule.forChild(AdminRentNotification),
  ],
  exports: [
    AdminRentNotification
  ]
})
export class AdminRentNotificationModule {}

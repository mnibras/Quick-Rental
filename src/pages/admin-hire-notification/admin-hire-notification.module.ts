import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminHireNotification } from './admin-hire-notification';

@NgModule({
  declarations: [
    AdminHireNotification,
  ],
  imports: [
    //IonicModule.forChild(AdminHireNotification),
  ],
  exports: [
    AdminHireNotification
  ]
})
export class AdminHireNotificationModule {}

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminNotifications } from './admin-notifications';

@NgModule({
  declarations: [
    AdminNotifications,
  ],
  imports: [
    //IonicModule.forChild(AdminNotifications),
  ],
  exports: [
    AdminNotifications
  ]
})
export class AdminNotificationsModule {}

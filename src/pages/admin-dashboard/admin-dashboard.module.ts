import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminDashboard } from './admin-dashboard';

@NgModule({
  declarations: [
    AdminDashboard,
  ],
  imports: [
    //IonicModule.forChild(AdminDashboard),
  ],
  exports: [
    AdminDashboard
  ]
})
export class AdminDashboardModule {}

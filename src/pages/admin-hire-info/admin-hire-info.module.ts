import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { AdminHireInfo } from './admin-hire-info';

@NgModule({
  declarations: [
    AdminHireInfo,
  ],
  imports: [
    //IonicModule.forChild(AdminHireInfo),
  ],
  exports: [
    AdminHireInfo
  ]
})
export class AdminHireInfoModule {}

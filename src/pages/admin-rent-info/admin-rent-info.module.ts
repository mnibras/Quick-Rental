import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { AdminRentInfo } from './admin-rent-info';

@NgModule({
  declarations: [
    AdminRentInfo,
  ],
  imports: [
    //IonicModule.forChild(AdminRentInfo),
  ],
  exports: [
    AdminRentInfo
  ]
})
export class AdminRentInfoModule {}

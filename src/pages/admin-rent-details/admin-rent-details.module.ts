import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminRentDetails } from './admin-rent-details';

@NgModule({
  declarations: [
    AdminRentDetails,
  ],
  imports: [
    //IonicModule.forChild(AdminRentDetails),
  ],
  exports: [
    AdminRentDetails
  ]
})
export class AdminRentDetailsModule {}

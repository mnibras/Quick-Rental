import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminHireDetails } from './admin-hire-details';

@NgModule({
  declarations: [
    AdminHireDetails,
  ],
  imports: [
    //IonicModule.forChild(AdminHireDetails),
  ],
  exports: [
    AdminHireDetails
  ]
})
export class AdminHireDetailsModule {}

import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { AdminUpdateHireDetails } from './admin-update-hire-details';

@NgModule({
  declarations: [
    AdminUpdateHireDetails,
  ],
  imports: [
    //IonicModule.forChild(AdminUpdateHireDetails),
  ],
  exports: [
    AdminUpdateHireDetails
  ]
})
export class AdminUpdateHireDetailsModule {}

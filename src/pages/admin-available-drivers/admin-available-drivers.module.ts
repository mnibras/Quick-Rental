import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminAvailableDrivers } from './admin-available-drivers';

@NgModule({
  declarations: [
    AdminAvailableDrivers,
  ],
  imports: [
    //IonicModule.forChild(AdminAvailableDrivers),
  ],
  exports: [
    AdminAvailableDrivers
  ]
})
export class AdminAvailableDriversModule {}

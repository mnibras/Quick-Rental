import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminAvailableCars } from './admin-available-cars';

@NgModule({
  declarations: [
    AdminAvailableCars,
  ],
  imports: [
    //IonicModule.forChild(AdminAvailableCars),
  ],
  exports: [
    AdminAvailableCars
  ]
})
export class AdminAvailableCarsModule {}

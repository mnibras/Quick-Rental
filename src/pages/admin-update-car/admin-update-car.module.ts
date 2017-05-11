import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminUpdateCar } from './admin-update-car';

@NgModule({
  declarations: [
    AdminUpdateCar,
  ],
  imports: [
    //IonicModule.forChild(AdminUpdateCar),
  ],
  exports: [
    AdminUpdateCar
  ]
})
export class AdminUpdateCarModule {}

import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { AdminAddCar } from './admin-add-car';

@NgModule({
  declarations: [
    AdminAddCar,
  ],
  imports: [
    //IonicModule.forChild(AdminAddCar),
  ],
  exports: [
    AdminAddCar
  ]
})
export class AdminAddCarModule {}

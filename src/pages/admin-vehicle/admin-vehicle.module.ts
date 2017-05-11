import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminVehicle } from './admin-vehicle';

@NgModule({
  declarations: [
    AdminVehicle,
  ],
  imports: [
    //IonicModule.forChild(AdminVehicle),
  ],
  exports: [
    AdminVehicle
  ]
})
export class AdminVehicleModule {}

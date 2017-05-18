import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { VehicleMoreOptionPage } from './vehicle-more-option-page';

@NgModule({
  declarations: [
    VehicleMoreOptionPage,
  ],
  imports: [
    //IonicModule.forChild(VehicleMoreOptionPage),
  ],
  exports: [
    VehicleMoreOptionPage
  ]
})
export class VehicleMoreOptionPageModule {}

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RentStep1 } from './rent-step1';

@NgModule({
  declarations: [
    RentStep1,
  ],
  imports: [
    //IonicModule.forChild(RentStep1),
  ],
  exports: [
    RentStep1
  ]
})
export class RentStep1Module {}

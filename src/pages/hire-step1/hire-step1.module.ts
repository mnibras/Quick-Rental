import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HireStep1 } from './hire-step1';

@NgModule({
  declarations: [
    HireStep1,
  ],
  imports: [
    //IonicModule.forChild(HireStep1),
  ],
  exports: [
    HireStep1
  ]
})
export class HireStep1Module {}

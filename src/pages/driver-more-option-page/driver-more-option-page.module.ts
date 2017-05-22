import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DriverMoreOptionPage } from './driver-more-option-page';

@NgModule({
  declarations: [
    DriverMoreOptionPage,
  ],
  imports: [
    //IonicModule.forChild(DriverMoreOptionPage),
  ],
  exports: [
    DriverMoreOptionPage
  ]
})
export class DriverMoreOptionPageModule {}

import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { RentMoreOptionPage } from './rent-more-option-page';

@NgModule({
  declarations: [
    RentMoreOptionPage,
  ],
  imports: [
    //IonicModule.forChild(RentMoreOptionPage),
  ],
  exports: [
    RentMoreOptionPage
  ]
})
export class RentMoreOptionPageModule {}

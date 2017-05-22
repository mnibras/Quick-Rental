import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { HireMoreOptionPage } from './hire-more-option-page';

@NgModule({
  declarations: [
    HireMoreOptionPage,
  ],
  imports: [
    //IonicModule.forChild(HireMoreOptionPage),
  ],
  exports: [
    HireMoreOptionPage
  ]
})
export class HireMoreOptionPageModule {}

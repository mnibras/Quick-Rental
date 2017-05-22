import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ViewRent } from './view-rent';

@NgModule({
  declarations: [
    ViewRent,
  ],
  imports: [
  //  IonicModule.forChild(ViewRent),
  ],
  exports: [
    ViewRent
  ]
})
export class ViewRentModule {}

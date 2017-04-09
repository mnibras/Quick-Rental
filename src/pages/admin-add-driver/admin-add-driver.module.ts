import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { AdminAddDriver } from './admin-add-driver';

@NgModule({
  declarations: [
    AdminAddDriver,
  ],
  imports: [
   // IonicModule.forChild(AdminAddDriver),
  ],
  exports: [
    AdminAddDriver
  ]
})
export class AdminAddDriverModule {}

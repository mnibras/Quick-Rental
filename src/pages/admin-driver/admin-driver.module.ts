import { NgModule } from '@angular/core';
import { AdminDriver } from './admin-driver';

@NgModule({
  declarations: [
    AdminDriver,
  ],
  imports: [
    //IonicModule.forChild(AdminDriver),
  ],
  exports: [
    AdminDriver
  ]
})
export class AdminDriverModule {}

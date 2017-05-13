import { NgModule } from '@angular/core';
import { AdminUpdateDriver } from './admin-update-driver';

@NgModule({
  declarations: [
    AdminUpdateDriver,
  ],
  imports: [
    //IonicModule.forChild(AdminUpdateDriver),
  ],
  exports: [
    AdminUpdateDriver
  ]
})
export class AdminUpdateDriverModule {}

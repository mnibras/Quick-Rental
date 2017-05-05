import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { AdminRentHistory } from './admin-rent-history';

@NgModule({
  declarations: [
    AdminRentHistory,
  ],
  imports: [
    //IonicModule.forChild(AdminRentHistory),
  ],
  exports: [
    AdminRentHistory
  ]
})
export class AdminRentHistoryModule {}

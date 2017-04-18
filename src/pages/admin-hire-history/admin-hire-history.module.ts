import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminHireHistory } from './admin-hire-history';

@NgModule({
  declarations: [
    AdminHireHistory,
  ],
  imports: [
    //IonicModule.forChild(AdminHireHistory),
  ],
  exports: [
    AdminHireHistory
  ]
})
export class AdminHireHistoryModule {}

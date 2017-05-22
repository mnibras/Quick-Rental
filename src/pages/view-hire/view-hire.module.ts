import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ViewHire } from './view-hire';

@NgModule({
  declarations: [
    ViewHire,
  ],
  imports: [
  //  IonicModule.forChild(ViewHire),
  ],
  exports: [
    ViewHire
  ]
})
export class ViewHireModule {}

import { NgModule } from '@angular/core';
import { UpdateUserProfile } from './update-user-profile';

@NgModule({
  declarations: [
    UpdateUserProfile,
  ],
  imports: [
    //IonicModule.forChild(UpdateUserProfile),
  ],
  exports: [
    UpdateUserProfile
  ]
})
export class UpdateUserProfileModule {}

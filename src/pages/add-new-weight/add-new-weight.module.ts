import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewWeightPage } from './add-new-weight';

@NgModule({
  declarations: [
    AddNewWeightPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewWeightPage),
  ],
})
export class AddNewWeightPageModule {}

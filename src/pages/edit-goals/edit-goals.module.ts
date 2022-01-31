import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditGoalsPage } from './edit-goals';

@NgModule({
  declarations: [
    EditGoalsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditGoalsPage),
  ],
})
export class EditGoalsPageModule {}

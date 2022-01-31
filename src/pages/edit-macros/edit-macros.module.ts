import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMacrosPage } from './edit-macros';

@NgModule({
  declarations: [
    EditMacrosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMacrosPage),
  ],
})
export class EditMacrosPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditJournalItemPage } from './edit-journal-item';

@NgModule({
  declarations: [
    EditJournalItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditJournalItemPage),
  ],
})
export class EditJournalItemPageModule {}

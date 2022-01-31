import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainerAppsPage } from './trainer-apps';

@NgModule({
  declarations: [
    TrainerAppsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainerAppsPage),
  ],
})
export class TrainerAppsPageModule {}

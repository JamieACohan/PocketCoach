import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealOptionModalPage } from './meal-option-modal';

@NgModule({
  declarations: [
    MealOptionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MealOptionModalPage),
  ],
})
export class MealOptionModalPageModule {}

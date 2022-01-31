import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodResultsPage } from './food-results';

@NgModule({
  declarations: [
    FoodResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodResultsPage),
  ],
})
export class FoodResultsPageModule {}

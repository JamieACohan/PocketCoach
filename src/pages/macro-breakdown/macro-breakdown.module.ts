import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MacroBreakdownPage } from './macro-breakdown';

@NgModule({
  declarations: [
    MacroBreakdownPage,
  ],
  imports: [
    IonicPageModule.forChild(MacroBreakdownPage),
  ],
})
export class MacroBreakdownPageModule {}

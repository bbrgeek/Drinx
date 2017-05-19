import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarsPage } from './bars';

@NgModule({
  declarations: [
    BarsPage,
  ],
  imports: [
    IonicPageModule.forChild(BarsPage),
  ],
  exports: [
    BarsPage
  ]
})
export class BarsPageModule {}

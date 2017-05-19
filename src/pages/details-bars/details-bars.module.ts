import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsBarsPage } from './details-bars';

@NgModule({
  declarations: [
    DetailsBarsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsBarsPage),
  ],
  exports: [
    DetailsBarsPage
  ]
})
export class DetailsBarsPageModule {}

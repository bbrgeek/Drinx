import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormBoissonPage } from './form-boisson';

@NgModule({
  declarations: [
    FormBoissonPage,
  ],
  imports: [
    IonicPageModule.forChild(FormBoissonPage),
  ],
  exports: [
    FormBoissonPage
  ]
})
export class FormBoissonPageModule {}

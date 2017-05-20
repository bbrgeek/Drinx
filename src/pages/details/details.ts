import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarsPage } from '../bars/bars';
import { FormBoissonPage } from '../form-boisson/form-boisson';

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  mail : string;
  pass : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mail = navParams.get('mail');
    this.pass = navParams.get('pass');
    console.log(this.mail);
  }


  private listBars() {
    this.navCtrl.push(BarsPage);
  }

  private formBoisson() {
    this.navCtrl.push(FormBoissonPage);
  }
}

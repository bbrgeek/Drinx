import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsBarsPage} from '../details-bars/details-bars';

/**
 * Generated class for the BarsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bars',
  templateUrl: 'bars.html',
})
export class BarsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private detailsBars() {
    this.navCtrl.push(DetailsBarsPage);
  }
}

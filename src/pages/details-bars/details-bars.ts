import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvitePage } from '../invite/invite';
/**
 * Generated class for the DetailsBarsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details-bars',
  templateUrl: 'details-bars.html',
})
export class DetailsBarsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private inviteFriend() {
    this.navCtrl.push(InvitePage);
  }

}

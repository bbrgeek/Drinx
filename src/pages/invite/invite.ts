import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the InvitePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {
  users: FirebaseListObservable<any[]>;
    constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
      this.users = afDB.list('/users');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

}

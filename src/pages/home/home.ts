import { Component,  OnInit, HostBinding  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
import { MapPage } from '../map/map';
import { GooglePage } from '../google/google';
import { DetailsPage } from '../details/details';
import { AngularFireModule } from 'angularfire2';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  mail : string;
  pass : string;

  constructor(public navCtrl: NavController, private firebase: Firebase) {}

private inscription() {
  this.navCtrl.push(InscriptionPage);
}
private map() {
  this.navCtrl.push(MapPage);
}
private connexion(){
  this.navCtrl.push(DetailsPage, {
  mail: this.mail,
  pass: this.pass});
  }
}

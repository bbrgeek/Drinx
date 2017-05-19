import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
import { MapPage } from '../map/map';
import { GooglePage } from '../google/google';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mail : string;
  pass : string;
  constructor(public navCtrl: NavController) {}

  private inscription() {
     this.navCtrl.push(InscriptionPage, {mail: this.mail,
     pass: this.pass});
  }
  private map() {
    this.navCtrl.push(MapPage);
  }
  private connexion() {
    this.navCtrl.push(DetailsPage,{
      pass : this.pass,
      mail : this.mail
    });
  }

}

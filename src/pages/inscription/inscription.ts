import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { MapPage } from '../map/map';
/**
 * Generated class for the InscriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {
  prenom : string;
  nom : string;
  mail : string;
  phone : string;
  pass : string;

  constructor(public navCtrl: NavController) {

  }
  private inscription() {
     this.navCtrl.push(DetailsPage, {prenom: this.prenom,
     nom: this.nom,
     mail: this.mail,
     phone: this.phone,
     pass: this.pass});
  }
  private map() {
    this.navCtrl.push(MapPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
var token : string = 'moi';

/**
 * Generated class for the FormBoissonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-form-boisson',
  templateUrl: 'form-boisson.html',
})
export class FormBoissonPage {
  bieres: FirebaseListObservable<any[]>;
  bfroide: FirebaseListObservable<any[]>;
  bchaude: FirebaseListObservable<any[]>;
  coktails: FirebaseListObservable<any[]>;
  champagne: FirebaseListObservable<any[]>;
  liqueurs: FirebaseListObservable<any[]>;
  whisky: FirebaseListObservable<any[]>;
  vins: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, afDB: AngularFireDatabase) {
    this.bieres = afDB.list('/bieres');
    this.bfroide = afDB.list('/bfroide');
    this.bchaude = afDB.list('/bchaude');
    this.coktails = afDB.list('/coktails');
    this.champagne = afDB.list('/champagne');
    this.liqueurs = afDB.list('/liqueurs');
    this.whisky = afDB.list('/whisky');
    this.vins = afDB.list('/vins');
  }

  addBoisson($var){
  let prompt = this.alertCtrl.create({
    title: 'Make your list of drinx',
    message: "Ajouter une boisson à votre carte",
    inputs: [
      {
        name: 'nom',
        placeholder: 'mojito'
      },
      {
        name: 'price',
        placeholder: 'Prix'
      },
      {
        name: 'quantite',
        placeholder: '25 cl'
      }
    ],
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Save',
        handler: data => {
          $var.push({
            id: token,
            nom: data.nom,
            price: data.price,
            quantite: data.quantite
          });
        }
      }
    ]
  });
  prompt.present();
}
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarsPage } from '../bars/bars';
import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner'
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
  option: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode: BarcodeScanner) {
    this.mail = navParams.get('mail');
    this.pass = navParams.get('pass');
    console.log(this.mail);
  }


  private listBars() {
    this.navCtrl.push(BarsPage);
  }

  async consume(){
    console.log("QR scanning");
    const result= await this.barcode.scan();
    console.log(result);


  }
}

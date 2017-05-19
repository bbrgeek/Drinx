import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';  
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
//Pages
import { InscriptionPage } from '../pages/inscription/inscription';
import { DetailsPage } from '../pages/details/details';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { GooglePage } from '../pages/google/google';
import { BarsPage } from '../pages/bars/bars';
import { DetailsBarsPage } from '../pages/details-bars/details-bars';
import { InvitePage } from '../pages/invite/invite';

// Import the AF2 Module
//import { AngularFireModule } from 'angularfire2';

// AF2 Settings
/*export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    InscriptionPage,
    GooglePage,
    BarsPage,
    DetailsBarsPage,
    InvitePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  //  AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    InscriptionPage,
    GooglePage,
    BarsPage,
    DetailsBarsPage,
    InvitePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

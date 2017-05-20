import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
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
import { FormBoissonPage } from '../pages/form-boisson/form-boisson';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Firebase } from '@ionic-native/firebase';
import { environment } from '../environments/environment';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDXjEbeBlR6Q94yzRMILLhousVdtHMFyPA",
  authDomain: "drinx-167819.firebaseapp.com",
  databaseURL: "https://drinx-167819.firebaseio.com",
  projectId: "drinx-167819",
  storageBucket: "drinx-167819.appspot.com",
  messagingSenderId: "435487243587"
};

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
    FormBoissonPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    FormBoissonPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from 'ionic-native';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-google',
  templateUrl: 'google.html',
})

export class GooglePage {
 constructor(private googleMaps: GoogleMaps) {}

// Load map only after view is initialized
ngAfterViewInit() {
 this.loadMap();
}

loadMap() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible


 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');

 let map: GoogleMap = this.googleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
     // Now you can add elements to the map like the marker
   }
 );

 // create LatLng object
 let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

 // create CameraPosition
 let position: CameraPosition = {
   target: ionic,
   zoom: 18,
   tilt: 30
 };

 // move the map's camera to position
 map.moveCamera(position);

 // create new marker
 let markerOptions: MarkerOptions = {
   position: ionic,
   title: 'Ionic'
 };
}
}

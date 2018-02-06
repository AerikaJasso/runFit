import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Activity } from './../shared/activity.model';
import { SAVED_ACTIVITIES } from './../shared/activities';

const apiToken = environment.MAPBOX_API_KEY;
declare let omnivore: any;
// leaflet variable
declare let L: any;

// Default Coordinates
const defaultCoords: number[] = [40, -80];
const defaultZoom = 8;

@Injectable()
export class MapService {

  constructor() { }

  getActivity(id: number) {
    return SAVED_ACTIVITIES.slice(0).find(run => run.id === id);
  }

  // style plotted route
  plotActivity(id: number) {
    const myStyle = {
      'color': '#e68b45',
      'weight': 4,
      'opacity': 0.95
    };

      // leaflet passing through an obj in the dom
    const map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 80;

    // setting the photos on top of the maps
    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      // tslint:disable-next-line:max-line-length
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 15,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);


    // leaflet only accepts geoJson data.
    const customLayer = L.geoJson(null, {
      style: myStyle
    });

    // omnivore is converting the pgx to geoJson
    const gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id === id).gpxData, null, customLayer)
      .on('ready', function () {
        // zooming in and centering map on the added layer
        map.fitBounds(gpxLayer.getBounds());
      }).addTo(map);
  }

}



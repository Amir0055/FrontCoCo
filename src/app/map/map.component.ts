import {AfterViewInit, Component} from '@angular/core';
import  * as L from 'leaflet';
import {Observable, Subscriber} from "rxjs";
import {MapboxService} from "../mapbox.service";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements  AfterViewInit {
  latitude!: number;
  longitude!: number;
  map: any;
constructor(private service:MapboxService) {
}


  ngAfterViewInit(): void {
    this.loadMap();

    }


  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }


  private getInfo(x1: number, y1: number, x2: number, y2: number): Promise<any> {
    return this.service.getInfo(y1.toString(), x1.toString(), y2.toString(), x2.toString());
  }
  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'sk.eyJ1IjoibWVkYW1pbmU0NyIsImEiOiJjbGd6MDFpZngwZW5pM2pwbnJybGkxM2JiIn0.AAF5Kb1dlDUNY3-Rp6--1g',
    }).addTo(this.map);

    this.map.on('click', (event: L.LeafletMouseEvent) => {
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;

      const icon = L.icon({
        iconUrl: 'assets/images/marker-icon.png',
        shadowUrl: 'assets/images/marker-shadow.png',
        popupAnchor: [13, 0],
      });

      const marker = L.marker([latitude, longitude], { icon }).addTo(this.map)

      // remove the marker when the user clicks on it
      marker.on('click', () => {
        this.map.removeLayer(marker);
      });
    });



    this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map.flyTo([position.latitude, position.longitude], 18);

        const icon = L.icon({
          iconUrl: 'assets/images/marker-icon.png',
          shadowUrl: 'assets/images/marker-shadow.png',
          popupAnchor: [13, 0],
        });

        const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Angular Leaflet');
        marker.addTo(this.map);
      });
    this.getInfo(52.52044, 13.404777, 52.520008, 13.404954)
    .then((result: any) => {
        alert(`Distance: ${result.routes[0].distance.toFixed(2)} meters\nDuration: ${result.routes[0].duration.toFixed(2)} seconds`);

    });


  }



}

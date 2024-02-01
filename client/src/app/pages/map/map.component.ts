import { Component, Input, OnInit } from '@angular/core';

declare const L: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {

  @Input() locations: any[] = [];
  map!: any;
  markers: any[] = [];

  ngOnInit(): void {
    const latLong = [30.715260, 76.707771];

    if (typeof L !== 'undefined') {
      this.map = L.map('map').setView(latLong, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);


    }
  }

  ngOnChanges(): void {

    const latLong = [30.715260, 76.707771];
    if (typeof L !== 'undefined') {

      this.markers.forEach(marker => {
        this.map.removeLayer(marker);
      });
      this.markers = [];



      this.locations.forEach(location => {
        const { latitude, longitude, datetime, name } = location;
        const marks = [latitude, longitude];
        // console.log(datetime);

        if (name) {
          var marker = L.marker(marks).addTo(this.map);
          marker.bindPopup(`<b> ${name}</b>`).openPopup();
        } else {
          var marker = L.marker(marks).addTo(this.map);
          marker.bindPopup(`<b>Date: ${datetime}</b>`).openPopup();
        }

        this.markers.push(marker);
      });
    }
  }
}
import { Component, OnInit } from '@angular/core';

declare const L: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{

  ngOnInit(): void {
    const latLong = [30.715260, 76.707771];
    
    if (typeof L !== 'undefined') {
      let map = L.map('map').setView(latLong, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      var marker = L.marker(latLong).addTo(map);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    }
  }
}

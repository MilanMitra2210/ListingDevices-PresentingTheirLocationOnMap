import { Component, OnInit, inject } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';

declare const L: any;

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, MapComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {

  isSidebarOpen: boolean = false;
  devices: any[] = [];
  locations: any[] = [];
  deviceName : any[] = [];
  deviceService = inject(DeviceService);

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  ngOnInit(): void {
    this.fetchDevices();

  }
  fetchDevices() {
    // Make a GET request to fetch devices from the backend API
    this.deviceService.getDevicesService().subscribe({
      next: (res) => {
        this.devices = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  handleSidebarItemClick(id: string) {
    if (id === 'All') {
      let allCurrlocations: any[] = [];
      this.deviceService.getSingleDeviceService(id).subscribe({
        next: (res) => {
          // console.log(res);
          for (let i = 0; i < res.length; i++) {
            console.log(res[i].locations[res[i].locations.length - 1]);

            res[i].locations[res[i].locations.length - 1]["name"] = res[i].name;
            
            allCurrlocations.push(res[i].locations[res[i].locations.length - 1]);
          }
          console.log(allCurrlocations);
          
          this.locations = allCurrlocations;
        },
        error: (err) => {
          console.log(err);
        }
      })

    } else {
      this.deviceService.getSingleDeviceService(id).subscribe({
        next: (res) => {
          this.locations = res.locations;
          // console.log(res.locations);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

  }
}

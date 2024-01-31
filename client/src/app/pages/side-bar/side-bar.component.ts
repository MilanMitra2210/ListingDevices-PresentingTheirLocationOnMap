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
  handleSidebarItemClick(id: string){
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

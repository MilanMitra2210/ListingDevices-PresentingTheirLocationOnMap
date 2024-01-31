import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  http = inject(HttpClient);
  //device services
  getDevicesService() {
    return this.http.get<any>(`${apiUrls.deviceServiceApi}getalldevices`);
  }
  getSingleDeviceService(deviceId: string) {
    return this.http.get<any>(`${apiUrls.deviceServiceApi}`+ deviceId);
  }
}

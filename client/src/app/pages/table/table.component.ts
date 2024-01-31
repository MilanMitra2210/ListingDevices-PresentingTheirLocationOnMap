import { Component, OnInit, inject } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [GridModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export default class TableComponent implements OnInit{
  
  

  deviceServide = inject(DeviceService);

  ngOnInit(): void {
    this.deviceServide.getSingleDeviceService("All").subscribe();
  }
}

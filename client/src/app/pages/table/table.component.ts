import { Component, OnInit, inject } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { DeviceService } from '../../services/device.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [GridModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export default class TableComponent {
  
  gridData !: any;

  deviceService = inject(DeviceService);

  ngOnInit(): void {
    // console.log("hi");
    
    if (!this.gridData) {
      this.deviceService.getAllDataService().subscribe({
        next: (res) => {
          this.gridData = res;
          // console.log(this.gridData);
          
        },
        error: (err) => {
          console.log('Error fetching data:', err);
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}

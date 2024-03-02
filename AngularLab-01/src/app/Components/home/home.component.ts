import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = "Lenovo ideapad";
  color: string = "red";
  description: string = "Lenovo IdeaPad 5 14ALC05 Laptop - AMD Ryzen™ 5-5500U - 8GB - 512GB SSD - AMD Radeon™ Graphics - 14.0 FHD - Win11 - Graphite Grey"
  //  class binding
  isAvailbale: boolean = false;

}

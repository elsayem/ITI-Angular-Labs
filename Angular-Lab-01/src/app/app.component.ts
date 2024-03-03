import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLab-01';
  name = "Abdulrahman";
  saymyname(): string {
    return `  Hello  ${this.name}`
  }
}

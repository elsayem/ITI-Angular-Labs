import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  workIndicator() {
    console.log("Event Binding is working")
  }

  printValue(e: Event) {
    console.log(e)
  }
}

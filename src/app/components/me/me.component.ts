import { Component } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent {
  handleClick(): void {
    // Perform the desired action here
    console.log('Image clicked!');
  }
}

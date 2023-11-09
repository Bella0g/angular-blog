import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent {
  constructor(private router: Router) { }
  
  handleClick(): void {
    console.log('Image clicked!');
    this.router.navigate(['/about']);
  }
}

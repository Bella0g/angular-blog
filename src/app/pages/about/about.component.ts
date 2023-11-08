import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';

/**
 * About component shows info about the blogger and the contact form that gets logged to the console.
*/

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title: string = '';
  content: string ='';
  
  onSubmit(form: NgForm) {
    console.log('Title:', this.title);
    console.log('Content:', this.content);

    form.reset();
  }
}



import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * About component shows info about the blogger and the contact form that gets logged to the console.
*/

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  // Set title and content to empty string
  title: string = '';
  content: string ='';
  
  onSubmit(form: NgForm) {
    // Log form in console
    console.log('Title:', this.title);
    console.log('Content:', this.content);

    // Clear form when submitted
    form.reset();
  }
}



import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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



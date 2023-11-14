import { Component } from '@angular/core';

@Component({
  selector: 'app-react-btn',
  templateUrl: './react-btn.component.html',
  styleUrls: ['./react-btn.component.css']
})
export class ReactBtnComponent {
  dislike: number = 0;
  like: number = 0;

  counter(type: string) {
    if (type === 'add') {
      this.like++;
    } else if (type === 'minus') {
      this.dislike++;
    }
  }
}

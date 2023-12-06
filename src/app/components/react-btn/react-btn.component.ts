import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-react-btn',
  templateUrl: './react-btn.component.html',
  styleUrls: ['./react-btn.component.css'],
})
export class ReactBtnComponent {
  @Input() postId: number = 0;

  dislike: number = 0;
  like: number = 0;

  ngOnInit() {
    this.loadReactionFromLocalStorage();
  }

  likePost() {
    this.like++;
    this.saveReactionToLocalStorage();
  }

  dislikePost() {
    this.dislike++;
    this.saveReactionToLocalStorage();
  }

  saveReactionToLocalStorage() {
    const key = `reactions-${this.postId}`;
    const reactions = { like: this.like, dislike: this.dislike };
    localStorage.setItem(key, JSON.stringify(reactions));
  }

  loadReactionFromLocalStorage() {
    const key = `reactions-${this.postId}`;
    const reactionsString = localStorage.getItem(key);
    if (reactionsString) {
      const reactions = JSON.parse(reactionsString);
      this.like = reactions.like;
      this.dislike = reactions.dislike;
    }
  }
 
}

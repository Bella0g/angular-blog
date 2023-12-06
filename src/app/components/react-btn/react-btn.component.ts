import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-react-btn',
  templateUrl: './react-btn.component.html',
  styleUrls: ['./react-btn.component.css'],
})
export class ReactBtnComponent {
  @Input() postId: number = 0;

  dislike: number = 0;
  like: number = 0;

  addReaction(type: string) {
    if (type === 'add') {
      this.like++;
    } else if (type === 'minus') {
      this.dislike++;
    }
    this.saveReactionToLocalStorage(); // Call the method to save the counts to local storage
  }

  // Save like and dislike counts to local storage
  saveReactionToLocalStorage() {
    const key = `reactions-${this.postId}`;
    const reactions = { like: this.like, dislike: this.dislike };
    localStorage.setItem(key, JSON.stringify(reactions));
  }

  // Retrieve like and dislike counts from local storage
  getReactionFromLocalStorage(): { like: number; dislike: number } {
    const key = `reactions-${this.postId}`;
    const reactionsString = localStorage.getItem(key);
    if (reactionsString) {
      return JSON.parse(reactionsString);
    } else {
      return { like: 0, dislike: 0 };
    }
  }

  // Initialize the component
  ngOnInit() {
    const savedReactions = this.getReactionFromLocalStorage();
    this.like = savedReactions.like;
    this.dislike = savedReactions.dislike;
  }
}

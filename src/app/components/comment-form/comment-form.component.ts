import { Component, Input } from '@angular/core';
import { Comment } from '../../interface/comments';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})

/**
 * Comment for creating a new comment, adding to local storage and getting the comments.
*/

export class CommentFormComponent {
  @Input() postId: number = 0;
  comment: string = "";

  postComments: Comment[] = [];

  // Method to handle adding a new comment
  addComment() {
    if (this.comment.trim() !== "") {
      const newComment: Comment = {
        body: this.comment,
        postId: this.postId,
        timeStamp: new Date().toISOString()
      };
      this.postComments.push(newComment);
      this.comment = "";
      this.saveCommentsToLocalStorage();
    }
  }

  // Save comments to local storage
  saveCommentsToLocalStorage() {
    const key = `comments-${this.postId}`;
    localStorage.setItem(key, JSON.stringify(this.postComments));
  }

  // Retrieve comments from local storage
  getCommentsFromLocalStorage(): Comment[] {
    const key = `comments-${this.postId}`;
    const commentsString = localStorage.getItem(key);
    if (commentsString) {
      return JSON.parse(commentsString);
    } else {
      return [];
    }
  }

  // Initialize the component
  ngOnInit() {
    this.postComments = this.getCommentsFromLocalStorage();
  }
}
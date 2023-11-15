import { Component, Input } from '@angular/core';
import { Comment } from '../../interface/comments';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})


export class CommentFormComponent {
  @Input() postId: number = 0;
  comment: string = "";
  postComments: Comment[] = [];

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

  saveCommentsToLocalStorage() {
    const key = `comments-${this.postId}`;
    localStorage.setItem(key, JSON.stringify(this.postComments));
  }

  getCommentsFromLocalStorage(): Comment[] {
    const key = `comments-${this.postId}`;
    const commentsString = localStorage.getItem(key);
    if (commentsString) {
      return JSON.parse(commentsString);
    } else {
      return [];
    }
  }

  ngOnInit() {
    this.postComments = this.getCommentsFromLocalStorage();
  }
}
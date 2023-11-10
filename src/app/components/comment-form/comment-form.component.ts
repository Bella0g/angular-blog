import { Component, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../interface/comments';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})


export class CommentFormComponent {
  @Output() commentAdded = new EventEmitter<Comment>();
  newComment: Comment = {
    body: '',
    postId: 0,
  };

  addComment() {
    if (this.newComment.body) {
      this.commentAdded.emit(this.newComment);
      this.newComment = {
        body: '',
        postId: 0,
      };
    }
  }
}
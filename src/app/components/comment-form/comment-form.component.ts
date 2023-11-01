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
    id: 0,
    body: '',
    postId: 0,
    user: { id: 0, username: '' },
  };

  addComment() {
    if (this.newComment.user.username && this.newComment.body) {
      this.commentAdded.emit(this.newComment);
      this.newComment = {
        id: 0,
        body: '',
        postId: 0,
        user: { id: 0, username: '' },
      };
    }
  }
}
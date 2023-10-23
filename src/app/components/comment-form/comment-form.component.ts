import { Component, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  @Output() commentAdded = new EventEmitter<Comment>();
  newComment: Comment = new Comment();

  addComment() {
    if (this.newComment.author && this.newComment.text) {
      this.commentAdded.emit(this.newComment);
      this.newComment = new Comment();
    }
  }
}

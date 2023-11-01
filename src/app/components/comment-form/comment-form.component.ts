import { Component, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../interface/comments';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})


export class CommentFormComponent {
  @Output() commentAdded = new EventEmitter<Comment>();
  newComment: Comment = { author: '', text: '', date: new Date() };

  addComment() {
    if (this.newComment.author && this.newComment.text) {
      this.commentAdded.emit(this.newComment);
      this.newComment = { author: '', text: '', date: new Date() };
    }
  }
}
import { Component, Input } from '@angular/core';
import { postData } from '../post-list/post.data';
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
        postId: this.postId
      };
      this.postComments.push(newComment);
      this.comment = "";
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { Comment } from '../../interface/comments';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})


export class CommentFormComponent {
  comment: string = "hello"; 
  postComments: string[] = [];

  addComment() {
    if (this.comment.trim() !== "") { 
    this.postComments.push(this.comment);
    this.comment = "";
    }
  }
}
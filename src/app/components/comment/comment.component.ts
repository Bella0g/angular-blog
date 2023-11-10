import { Component, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../interface/comments';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment!: Comment;
  commentForm: FormGroup;
                
  constructor(private formBuilder: FormBuilder, private commentsService: CommentsService) {
    this.commentForm = this.formBuilder.group({
      content: '',
    });
  }
/*
  addComment() {
    if (this.commentForm.valid) {
      const newComment = this.commentForm.value;
      this.commentsService.addComment(newComment.body, this.commentsService.getPost(), newComment.postId);
    }
  }
  */
}

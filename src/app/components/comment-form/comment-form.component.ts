import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../../interface/comments';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})


export class CommentFormComponent {
  @Input() comments: Comment[] = [];

  // Input property for receiving the current post ID from the parent component
  @Input() currentPostId!: number;

  // Output property to emit a new comment to the parent component
  @Output() commentAdded = new EventEmitter<Comment>();

  // Reactive form for handling comment input
  commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the commentForm with a single form control for the comment body
    this.commentForm = this.formBuilder.group({
      body: ['', Validators.required],
    });
  }

  // Function triggered when the user adds a new comment
  addComment() {
    // Check if the commentForm is valid
    if (this.commentForm.valid) {
      // Create a new comment object using the form values and the current post ID
      const newComment: Comment = {
        body: this.commentForm.value.body,
        postId: this.currentPostId,
      };

      this.commentAdded.emit(newComment);

      // reset the form after adding a comment
      this.commentForm.reset();
    }
  }
}
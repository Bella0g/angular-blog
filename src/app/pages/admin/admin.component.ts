import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../interface/post';
import { PostService } from 'src/app/service/post.service';
import { SaveLocalService } from 'src/app/service/save-local.service';

/**
 * This component uses post from interface and postService to create new post
 */

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  newPost: Post = {
    postId: Date.now(),
    title: '',
    imageUrl: '',
    content: '',
    creationDate: '',
    likes: 0,
    dislikes: 0,
    comment: [],
  };

  // Set state of form to empty string
  title = '';
  imgUrl = '';
  content = '';

  constructor(
    private postService: PostService
  ) {}

  // Method to handle form submission and add a new post
  onFormSubmit(form: NgForm) {
    this.addPost(); // Call the method to add the post
    form.reset(); // Resets form
  }

  // Add a new post
  addPost() {

    this.postService.addPost(this.newPost).subscribe(() => {
      this.postService.newPostAdded.next(this.newPost);
    });
  }
}

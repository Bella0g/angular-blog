import { Component, Input } from '@angular/core';
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
  posts: Post[];
  newPost: Post;

  // Set state of form to empty string
  title = '';
  imgUrl = '';
  content = '';

  constructor(
    private postService: PostService,
    private saveLocalService: SaveLocalService
  ) {
    // Retrieve existing posts from the post service
    this.posts = postService.getPosts();
    this.newPost = {
      // Generate a unique ID for the new post
      postId: this.generateUniqueId(),
      title: '',
      imageUrl: '',
      content: '',
      creationDate: '',
      likes: 0,
      dislikes: 0,
      comment: [],
    };
  }

  // Generate a unique ID for the new post
  private generateUniqueId(): number {
    return Date.now();
  }

  // Method to handle form submission and add a new post
  onFormSubmit(form: NgForm) {
    this.addPost(); // Call the method to add the post
    form.reset(); // Resets form
  }

  // Add a new post
  addPost() {
    const postToAdd: Post = {
      title: this.newPost.title,
      content: this.newPost.content,
      creationDate: new Date().toISOString(),
      imageUrl: this.newPost.imageUrl,
      postId: this.newPost.postId,
      likes: this.newPost.likes,
      dislikes: this.newPost.dislikes,
      comment: this.newPost.comment,
    };

    // Add the new post using the post service
    this.postService.addPost(postToAdd).subscribe(() => {
      // Emit a new post event
      this.postService.newPostAdded.next(postToAdd);
      // Save the new post to local storage using the SaveLocalService
      this.saveLocalService.saveFormData('newPostData', postToAdd);
    });
  }

  // Save the new post object to local storage
  savePost() {
    localStorage.setItem('newPostData', JSON.stringify(this.newPost));
    console.log('New post saved to local storage:', this.newPost);
  }
}

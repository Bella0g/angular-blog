import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Post } from '../../interface/post';
import { PostService } from 'src/app/service/post.service';

/**
 * This component uses post from interface and postService to create new post
*/

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  posts: Post[];
  newPost: Post;

  // Set state of form to empty string 
  title = '';
  imgUrl = '';
  content = '';

  constructor(private postService: PostService) {
    // Retrieve existing posts from the post service
    this.posts = postService.getPosts();
    this.newPost = {
      // Generate a unique ID for the new post
      postId: this.generateUniqueId(),
      title: '',
      imageUrl: '',
      content: '',
      likes: 0,
      dislikes: 0,
      comment: []
    };
  }

  onFormSubmit(form: NgForm) {
    this.addPost(); // Call the method to add the post
    form.reset() // Resets form 
  }

  // Save the new post object to local storage
  savePost() {
    localStorage.setItem('newPostData', JSON.stringify(this.newPost));
  }

  // Add a new post
  addPost() {
    const postToAdd: Post = {
      title: this.newPost.title,
      content: this.newPost.content,
      imageUrl: this.newPost.imageUrl,
      postId: this.newPost.postId,
      likes: this.newPost.likes,
      dislikes: this.newPost.dislikes,
      comment: this.newPost.comment
    };
    // Add the new post using the post service
    this.postService.addPost(postToAdd);
  }

  // Generate a unique ID for the new post
  private generateUniqueId(): number {
    return Date.now();
  }

}

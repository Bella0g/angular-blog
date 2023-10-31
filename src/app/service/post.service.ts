import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable()
export class PostService {
  // Create a private array property called posts to store the list of posts
  private posts: Post[] = [];

  // Implement a method to get the posts
  getPosts() {
    return this.posts;
  }
  
  // Implement a method to add a new post to the list
  addPost(post: Post) {
    this.posts.push(post);
  }
}


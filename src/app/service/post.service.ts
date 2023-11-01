import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

// post service will handle the storage and retrieval of blog posts using local storage.
// This service should have methods to get all posts, add a new post, delete a post, and get a single post by ID.

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


import { Injectable } from '@angular/core';
import { Post } from '../interface/post';
import { postData } from '../components/post-list/post.data';

// post service will handle the storage and retrieval of blog posts using local storage.
// This service should have methods to get all posts, add a new post, delete a post, and get a single post by ID.

@Injectable()
export class PostService {
  private posts: Post[] = [];

  //  Method to get the posts
  getPosts() {
    return this.posts;
  }

  // Add a new post to the list
  addPost(post: Post) {
    this.posts.push(post);
  }
}


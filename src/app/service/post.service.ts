import { Injectable } from '@angular/core';
import { Post } from '../interface/post';
import { postData } from "../components/post-list/post.data";

@Injectable()

export class PostService {
  private posts: Post[] = postData;
  // Get all posts from the local data source
  getPosts() {
    return this.posts;
  }
  // Method to add a new post to the local data source
  public addPost(post: Post) {
    this.posts.push(post);
  }
  //  Get a single post by its ID from the local data source
  getPostById(id: number) {
    return this.posts.find(post => post.postId === id);
  }
}


import { Injectable } from '@angular/core';
import { Post } from '../interface/post';
import { postData } from "../components/post-list/post.data";
/**
 * Post service has methods to get all posts, add a new post and get a single post by ID.
*/

@Injectable()

export class PostService {
  private posts: Post[] = postData;

  getPosts() {
    return this.posts;
  }

  public addPost(post: Post) {
    this.posts.push(post);
  }

  getPostById(id: number) {
    return this.posts.find(post => post.postId === id);
  }
}


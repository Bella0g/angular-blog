import { Injectable } from '@angular/core';
import { Post } from '../pages/admin/post.model';

@Injectable()
export class PostService {
  private posts: Post[] = [];

  getPosts() {
    return this.posts;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }
}


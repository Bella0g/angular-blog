import { Injectable } from '@angular/core';
import { Subject, Observable, of  } from 'rxjs';
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
  public addPost(post: Post): Observable<any> {
    this.posts.push(post);
    return of(post);
  }
  //  Get a single post by its ID from the local data source
  getPostById(id: number) {
    return this.posts.find(post => post.postId === id);
  }

  newPostAdded: Subject<Post> = new Subject();
}


import { Injectable } from '@angular/core';
import { Subject, Observable, of  } from 'rxjs';
import { Post } from '../interface/post';

import { SaveLocalService } from './save-local.service';

@Injectable()

export class PostService {

  private localStorageKey = 'blogPosts';

    constructor(private saveLocalService: SaveLocalService) { }

  // Get all posts from the local data source
  getPosts(): Post[] {
    const postsString = this.saveLocalService.getFormData(this.localStorageKey);
    return postsString ? postsString : [];
  }

  // Method to add a new post to the local data source
  public addPost(post: Post): Observable<any> {
    const posts = this.getPosts();
    posts.push(post);
    this.saveLocalService.saveFormData(this.localStorageKey, posts);
    return of(post);
  }

  //  Get a single post by its ID from the local data source
  getPostById(id: number): Post | undefined {
    const posts = this.getPosts();
    return posts.find(post => post.postId === id);
  }

  newPostAdded: Subject<Post> = new Subject();
}


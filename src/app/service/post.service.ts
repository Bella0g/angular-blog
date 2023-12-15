import { Injectable } from '@angular/core';
import { Subject, Observable, of  } from 'rxjs';
import { Post } from '../interface/post';

import { postData } from '../components/post-list/post.data';
import { SaveLocalService } from './save-local.service';

@Injectable()

export class PostService {

  private localStorageKey = 'blogPosts';

    constructor(private saveLocalService: SaveLocalService) {
      const getPosts = this.saveLocalService.getFormData(this.localStorageKey) 
      if (getPosts === null) {
        this.potsDataArray = postData;
        saveLocalService.saveFormData(this.localStorageKey, postData);
      } else {
        this.potsDataArray = getPosts;
      }
     }


  // Method to add a new post to the local data source
  public addPost(post: Post): Observable<any> {
    this.potsDataArray.push(post);
    this.saveLocalService.saveFormData(this.localStorageKey, this.potsDataArray);
    return of(post);
  }

  //  Get a single post by its ID from the local data source
  getPostById(id: number): Post | undefined {
    const posts = this.potsDataArray;
    return posts.find(post => post.postId === id);
  }

  potsDataArray:Post[] ;

  newPostAdded: Subject<Post> = new Subject();
}


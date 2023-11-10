import { Injectable } from '@angular/core';
import { Comment } from '../interface/comments';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private localComments: Comment[] = [];

  constructor() {
    this.localComments = this.loadLocalData();
  }

  private loadLocalData(): Comment[] {
    let comments = localStorage.getItem('comments');
    return !comments ? [] : JSON.parse(comments);
  }

  public get comments(): Comment[] {
    return this.localComments;
  }

  public addComment(body: string, post: Post): void {
    this.localComments.push({
      body,
      postId: post.postId,
    });

    localStorage.setItem('comments', JSON.stringify(this.localComments));
  }
}
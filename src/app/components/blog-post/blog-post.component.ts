import { Component } from '@angular/core';
import { Comment } from '../../interface/comments';


export interface BlogPost {
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: string[];
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  comments: Comment[] = [];

  addComment(newComment: Comment) {
    this.comments.push(newComment);
  }

}

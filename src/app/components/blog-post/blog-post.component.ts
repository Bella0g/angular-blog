import { Component } from '@angular/core';
import { Comment } from '../../interface/comments';

/**
 * This component will show the post details info based on what post the user clicked. 
 * Here they can like and comment the posts.
*/

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

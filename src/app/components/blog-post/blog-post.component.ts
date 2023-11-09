import { Component, OnInit } from '@angular/core';
import { Comment } from '../../interface/comments';
import { ActivatedRoute } from '@angular/router';
import { postData } from '../post-list/post.data';
import { PostService } from 'src/app/service/post.service';
import { Post } from '../../interface/post'

/**
 * This component will show the post details info based on what post the user clicked. 
 * Users can also like and comment the posts.
*/

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})

export class BlogPostComponent implements OnInit {
  post: Post = {
    postId: 0,
    title: '',
    imageUrl: '',
    content: '',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comment: [],
  };
  
  title: string = '';
  content: string = '';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = params['id'];
      // Fetch the full post data using the post ID
    });
  }

  comments: Comment[] = [];

  addComment(newComment: Comment) {
    this.comments.push(newComment);
  }

}

import { Component, OnInit } from '@angular/core';
import { Comment } from '../../interface/comments';
import { ActivatedRoute } from '@angular/router';
import { postData } from '../post-list/post.data';
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
    title: 'A Night of Elegance at a Parisian Bar Opening',
    imageUrl: './assets/bar/bar-3.jpeg',
    content: "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quas corporis et quasi debitis ipsa, velit excepturi tempora odit cumque.",
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comment: [],
  };
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = params['id'];
      // Find the post data using the post ID
      const post = postData.find(p => p.postId === postId);
      // Display the post data in the template
    });
  }
  comments: Comment[] = [];

  addComment(newComment: Comment) {
    this.comments.push(newComment);
  }

}

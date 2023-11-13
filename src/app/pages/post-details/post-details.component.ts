import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postData } from '../../components/post-list/post.data';
import { Post } from '../../interface/post';

/**
 * This component will show the post details info based on what post the user clicked. 
 * Users can also like and comment the posts.
*/

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  dislike: number = 0; 
  like: number = 0;
  
  counter(type: string) {
    if (type === 'add') {
      this.like++;
    } else if (type === 'minus') {
      this.dislike++;
    }
  }

  @Input() post: Post = {} as Post;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Find the post data using the post ID
      const postId: number = +params['id'];
      console.log('postId from route:', postId);

      // Display the post data in the template
      this.post = postData.find(p => p.postId === postId) || {} as Post;

      console.log('Post:', this.post);
    });
  }

}

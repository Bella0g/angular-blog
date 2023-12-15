import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

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
  id: number = 0;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  public get post() {
    return this.postService.getPostById(this.id)
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Find the post data using the post ID
      this.id = +params['id'];
  
      console.log('Post:', this.post);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postData } from '../../components/post-list/post.data';
import { Post } from '../../interface/post'

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
  post: Post = {
    postId: 0,
    title: 'A Night of Elegance at a Parisian Bar Opening',
    imageUrl: './assets/bar/bar-3.jpeg',
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quas corporis et quasi debitis ipsa, velit excepturi tempora odit cumque.",
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

}

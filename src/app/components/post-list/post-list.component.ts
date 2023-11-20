import { Component } from '@angular/core';
import { postData } from "./post.data";
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

/**
 * This component represents a list of posts and handles the display and interaction logic for the list.
 * The postData import is used to fetch the data for the post list.
*/

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  PostList = postData;

  constructor(private postService: PostService, private router: Router) { }

  goToPostDetails(postId: number) {
    this.router.navigate(['/post', postId]);
  }

  handleSubmit(imageUrl: string, title: string) {
    if (!imageUrl || !title) {
      console.error('Please fill out all fields.');
      return;
    }

    const newPost = {
      postId: this.generateUniqueId(),
      title: '', 
      imageUrl: '',
      content: '',
      likes: 0,
      dislikes: 0,
      comment: [],
    };

    // Add the new post using the post service
    this.postService.addPost(newPost);

    // Navigate to the post details page for the new post
    this.router.navigate(['/post-details', newPost.postId]);
  }

  private generateUniqueId(): number {
    return Date.now();
  }

}


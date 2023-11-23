import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { filter } from 'rxjs/operators';
// Imported from './post.data'
import { postData } from "./post.data";

/**
 * This component represents a list of posts and handles the display and interaction logic for the list.
 * The postData import is used to fetch the data for the post list.
*/

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  // Property represents the list of posts fetched from the post.data file
  PostList = postData;

  constructor(private postService: PostService, private router: Router) { }
  // Uses the filter operator from RxJS to filter the router events and scroll to the top of the page.
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  // Navigate to post details on click
  goToPostDetails(postId: number) {
    this.router.navigate(['/post', postId]);
  }

  // Handles if new post from admin page can be added to post list
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
      creationDate: '',
      likes: 0,
      dislikes: 0,
      comment: [],
    };

    // Add the new post using the post service
    this.postService.addPost(newPost);

    // Navigate to the post details page for the new post
    this.router.navigate(['/post-details', newPost.postId]);
  }

  // Generates a unique ID for a new post
  private generateUniqueId(): number {
    return Date.now();
  }

}


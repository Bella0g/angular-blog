import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';
import { SaveLocalService } from 'src/app/service/save-local.service';
import { AdminComponent } from 'src/app/pages/admin/admin.component';

// Imported from './post.data'
import { postData } from './post.data';

/**
 * This component represents a list of posts and handles the display and interaction logic for the list.
 * The postData import is used to fetch the data for the post list.
 */

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  // Property represents the list of posts fetched from the post.data file, ta in från post data array 

  constructor(
    private postService: PostService,
    private router: Router,
    private saveLocalService: SaveLocalService
  ) {  }

  public get PostList() {
    return this.postService.potsDataArray
  }

  // Uses the filter operator RxJS to filter the router events and scroll to the top of the page.
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

 
}

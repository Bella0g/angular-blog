import { Component } from '@angular/core';
import { postData } from "./post.data";
import { Router } from '@angular/router';


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

  constructor(private router: Router) { }

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
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comment: [],
    };

    this.PostList.push(newPost);
  }

  private generateUniqueId(): number {
    return Date.now();
  }

}


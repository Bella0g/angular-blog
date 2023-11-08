import { Component, Input, Output, EventEmitter } from '@angular/core';
import { postData } from "./post.data";


// PostListComponent that will display a list of all blog posts.
// This component should use the Post Service to retrieve the list of posts and display them in the template. 

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  PostList = postData;
  constructor() { }

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


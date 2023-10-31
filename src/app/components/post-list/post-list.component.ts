import { Component, Input, Output, EventEmitter } from '@angular/core';
import { postData } from "./post.data";

interface post {
  id: number;
  title: string;
  imageUrl: string;
}

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
      id: this.generateUniqueId(), 
      imageUrl,
      title,
    };

    this.PostList.push(newPost);
  }
  private generateUniqueId(): number {
    return Date.now();
  }
}


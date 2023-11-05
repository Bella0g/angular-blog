import { Component } from '@angular/core';
import { Post } from '../../interface/post';
// Here you can add a new post

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  savePost() {
    let post: string = "";
    localStorage.setItem('newPostData', JSON.stringify(post));
  }

  newPost: Post = {
    title: '',
    content: '',
    imageUrl: '',
    id: 0,
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: ['']
  };

  createPost() {
    if (this.newPost.title && this.newPost.content) {
      this.newPost = {
        title: '',
        content: '',
        imageUrl: '',
        id: 0,
        creationDate: new Date(),
        likes: 0,
        dislikes: 0,
        comments: ['']
      };
    }
  }

}

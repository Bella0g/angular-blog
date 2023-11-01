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
    localStorage.setItem('newPostData',JSON.stringify(post));
  }

  newPost : Post = { title: '', content: '', imageUrl: ''}

  //constructor(private postService: PostService) { }

  createPost() {
    if (this.newPost.title && this.newPost.content) {
      //this.postService.addPost(this.newPost);
      this.newPost = { title: '', content: '', imageUrl: '' };
    }
  }

}

import { Component } from '@angular/core';
import { Post } from '../../interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  posts: Post[];
  newPost: Post;
  
  constructor(private postService: PostService) {
    this.posts = postService.getPosts();
    this.newPost = {
      postId: this.generateUniqueId(),
      title: '',
      imageUrl: '',
      content: '',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comment: []
    };
  }

  savePost() {
    localStorage.setItem('newPostData', JSON.stringify(this.newPost));
  }

  addPost() {
    const postToAdd: Post = {
      title: this.newPost.title,
      content: this.newPost.content,
      imageUrl: this.newPost.imageUrl,
      postId: this.newPost.postId,
      creationDate: this.newPost.creationDate,
      likes: this.newPost.likes,
      dislikes: this.newPost.dislikes,
      comment: this.newPost.comment
    };
    this.postService.addPost(postToAdd);
  }

  private generateUniqueId(): number {
    return Date.now();
  }
}

import { Component, Input } from '@angular/core';
import { postData } from '../post-list/post.data';
import { Post } from 'src/app/interface/post';



@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class BlogPostComponent {
  @Input() post: Post = {} as Post;
  @Input() postId: number = 0;
}

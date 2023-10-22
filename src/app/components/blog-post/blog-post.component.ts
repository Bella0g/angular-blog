import { Input, Component } from '@angular/core';
import { Comment } from '../comment/comment.model';


export interface BlogPost {
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: string[];
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  comments: Comment[] = [
    {
      author: 'Anonym användare',
      text: 'Detta är en kommentar.',
      date: new Date(),
    },
    {
      author: 'En annan användare',
      text: 'En annan kommentar här.',
      date: new Date(),
    },
  ];

  
}

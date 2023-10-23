import { Component } from '@angular/core';

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
  PostList: post[] = [
    {
      id: 0,
      title: 'Bar opening in paris',
      imageUrl: './assets/bar/bar-3.jpeg',
    },
    {
      id: 1,
      title: 'Ballerina photoshoot in NYC',
      imageUrl: './assets/ballerina/ballerina-4.jpeg',
    },
    {
      id: 2,
      title: 'Designer behind the sencse',
      imageUrl: './assets/designer/designer-4.jpeg',
    },
  {
    id: 3,
    title: 'Fashion show in india',
    imageUrl: './assets/india/india-hidden.jpeg',
    },
    {
      id: 4,
      title: 'Photoshoot for japans natinal day',
      imageUrl: './assets/japan/japan-model.jpeg',
    },
    {
      id: 5,
      title: 'my friends new brand H33y',
      imageUrl: './assets/new-brand/brand-2.jpeg',
    },
    {
      id: 6,
      title: 'water sirens',
      imageUrl: './assets/water/water-3.jpeg',
    },
    {
      id: 7,
      title: 'Marketing images for a new play',
      imageUrl: './assets/student/art-study.jpeg',
    },
  ];
}


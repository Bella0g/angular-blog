import { Component } from '@angular/core';

interface post {
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
      title: 'Bar opening in paris',
      imageUrl: './assets/bar/bar-3.jpeg',
    },
    {
      title: 'Ballerina photoshoot in NYC',
      imageUrl: './assets/ballerina/ballerina-4.jpeg',
    },
    {
      title: 'Designer behind the sencse',
      imageUrl: './assets/designer/designer-4.jpeg',
    },
  {
    title: 'Pasta',
    imageUrl: './assets/india/india-hidden.jpeg',
    },
    {
      title: 'Photoshoot for japans natinal day',
      imageUrl: './assets/japan/japan-model.jpeg',
    },
    {
      title: 'my friends new brand H33y',
      imageUrl: './assets/new-brand/brand-2.jpeg',
    },
    {
      title: 'water sirens',
      imageUrl: './assets/water/water-2.jpeg',
    },
    {
      title: 'Photoshoot for japans natinal day',
      imageUrl: './assets/japan/japan-model.jpeg',
    },
  ];
}


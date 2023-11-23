/**
 * Post interface includes properties for the post title,
 * thumbnail URL, body, creation date, likes, dislikes, and comments.
 * */

export interface Post {
    postId: number;
    title: string;
    imageUrl: string;
    content: string;
    creationDate: string;
    additionalImageUrls?: string[];
    likes: number;
    dislikes: number;
    comment: string[];
}


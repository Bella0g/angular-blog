// Post interface that includes properties for the post title,
// thumbnail URL, body, creation date, likes, dislikes, and comments.
export interface Post {
    title: string;
    content: string;
    imageUrl: string;
    id: number;
    creationDate: Date;
    likes: number;
    dislikes: number;
    comments: string[];
}


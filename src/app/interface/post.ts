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


export class Comment {
    author: string;
    text: string;
    date: Date;

    constructor() {
        this.author = '';
        this.text = '';
        this.date = new Date();
    }
}
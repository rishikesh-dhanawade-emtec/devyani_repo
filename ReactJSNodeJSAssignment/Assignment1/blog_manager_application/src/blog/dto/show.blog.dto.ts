export interface CreateBlogDto {

    title: string;
    contents: string;
    tags: string;
    userId: number;
    date: Date;
    likes: number;
    dislikes: number;

}
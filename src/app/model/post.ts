
export interface Post {
    [x: string]: any;
    id: any;
    title: string;
    content: string;
    imagePath: string | null,
    creator: string | null
}

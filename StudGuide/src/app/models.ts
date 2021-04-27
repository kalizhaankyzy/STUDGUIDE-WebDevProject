export interface Category{
    id: number;
    name: string;
}
export interface Author{
    id: number;
    name: string; 
    surname: string;
    email: string;
}
export interface News{
    id: number;
    title: string;
    text: string;
    category_id: number;
    author: Author;
    author_id: number;
    description: string;
}
export interface CourseLevel{
    id: number;
    name: string;
}
export interface Course{
    id: number;
    name: string;
    rate: number;
    level_id: number;
    price: number;
    description: string;
    url: string;
}
export interface Review{
    id:number;
    sender: string;
    text: string;
}

export interface AuthToken{
    token: string;
}
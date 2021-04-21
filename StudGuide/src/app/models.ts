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
    author_id: number;
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
}
export interface AuthToken{
    token: string;
}
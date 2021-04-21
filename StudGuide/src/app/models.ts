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
    category_id: number;
    author_id: number;
}

export interface AuthToken{
    token: string;
}
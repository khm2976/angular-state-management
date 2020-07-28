export interface Category {
    category_code: number;
    category_name: string;
    sub: {
        category_code: number;
        category_name: string;
    }[];
}

export interface Product {
    name: string;
    itemNo: number;
    imageUrl: string;
}
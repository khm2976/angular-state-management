// state 관리 모델
export interface AppState {
    category1: Category;
    category2: Category;
    product: Product;
}

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
import { IsNotEmpty } from 'class-validator';

export type Root = Root2[];

export interface Root2 {
    book_cover: any;
    categories: Categories;
    current_seller: CurrentSeller;
    description: string;
    images: Image[];
    list_price: number;
    name: string;
    original_price: number;
    rating_average: number;
    short_description: string;
    specifications: Specification[];
    id: number;
    authors: Author;
    quantity_sold: QuantitySold;
}

export interface Categories {
    id: number;
    name: string;
    is_leaf: boolean;
}

export interface CurrentSeller {
    id: number;
    sku: string;
    name: string;
    link: string;
    logo: string;
    price: number;
    product_id: string;
    store_id: number;
    is_best_store: boolean;
    is_offline_installment_supported: any;
}

export interface Image {
    base_url: string;
    is_gallery: boolean;
    label: any;
    large_url: string;
    medium_url: string;
    position: any;
    small_url: string;
    thumbnail_url: string;
}

export interface Specification {
    name: string;
    attributes: Attribute[];
}

export interface Attribute {
    code: string;
    name: string;
    value: string;
}

export interface Author {
    id: number;
    name: string;
    slug: string;
}

export interface QuantitySold {
    text: string;
    value: number;
}

export class PaginationProductDto {
    @IsNotEmpty()
    page: number;
    @IsNotEmpty()
    limit: number;

    category: string;
    rating: number;
    authors: string;
    price: string;
}

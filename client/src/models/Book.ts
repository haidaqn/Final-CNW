export interface BookQuery {
    page: number;
    limit: number;
    category?: string;
    priceTo?: number;
    priceEnd?: number;
    rating?: number;
    authors?: string;
    price?: string;
}

export interface ListResponse {
    data: any;
    current_page: number;
    count_page: number;
    totalRow: number;
}

export interface BookItem {
    _id: string;
    name: string;
    price: number;
    description: string;
    images: string;
    rating: number;
    short_description: string;
    specifications: string;
    authors: string;
    category: string;
    quantity_sold: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

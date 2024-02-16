import axiosClient from './axiosClient';
import queryString from 'query-string';
import { BookQuery } from '@/models/Book';
const bookApi = {
    getPagination(query: BookQuery) {
        const { limit, page, category, priceEnd, priceTo, rating, authors, price } = query;
        const queryParams = { limit, page, category, priceEnd, priceTo, rating, authors, price };
        const validQueryParams = queryString.stringify(queryParams, {
            skipNull: true,
            skipEmptyString: true,
        });
        const url = `book/getAll?${validQueryParams}`;
        return axiosClient.get(url);
    },
    getDetailBook(id: string) {
        const url = `book/${id}`;
        return axiosClient.get(url);
    },

    search(search: string) {
        const url = `book/search/${search}`;
        return axiosClient.get(url);
    },
};

export default bookApi;

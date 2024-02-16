import { Schema, Document } from 'mongoose';

const BookSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            default: 100000
        },
        description: String,
        images: String,
        rating: Number,
        short_description: String,
        specifications: String,
        authors: String,
        category: String,
        quantity_sold: Number
    },
    {
        timestamps: true,
        collection: 'Book'
    }
);

export { BookSchema };

export interface Book extends Document {
    name: String;
    price: Number;
    description: String;
    images: String;
    rating: Number;
    short_description: String;
    specifications: String;
    authors: String;
    category: String;
    quantity_sold: Number;
}

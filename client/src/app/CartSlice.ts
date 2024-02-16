import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItemData {
    _id: string;
    name: string;
    img: string;
    price: number;
    quantity: number;
}

export interface CartState {
    lengthProduct: number;
    dataStore: CartItemData[];
}
const initialState: CartState = {
    lengthProduct: 0,
    dataStore: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCart: (state) => {
            state.dataStore = [];
            state.lengthProduct = 0;
        },
        addToCart: (state, action: PayloadAction<CartItemData>) => {
            const { quantity, _id } = action.payload;
            const existingBook = state.dataStore.find((item) => item._id === _id);
            if (existingBook) {
                state.lengthProduct = state.lengthProduct + quantity;
                existingBook.quantity += quantity;
            } else {
                state.dataStore = [...state.dataStore, action.payload];
                state.lengthProduct += quantity;
            }
        },
        deleteOneCart: (state, action: PayloadAction<CartItemData>) => {
            const { quantity, _id } = action.payload;
            const existingBook = state.dataStore.find((item) => item._id === _id);
            if (existingBook) {
                existingBook.quantity -= 1;
                state.lengthProduct -= quantity;
            }
        },
        removeCart: (state, action: PayloadAction<CartItemData>) => {
            const { _id } = action.payload;
            state.lengthProduct -= 1;
            state.dataStore = state.dataStore.filter((item) => item._id !== _id);
        },
    },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;

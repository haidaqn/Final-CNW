import { combineReducers } from 'redux';
import appReducer from './AppSlice';
import cartReducer from './CartSlice';
const rootReducer = combineReducers({
    app: appReducer,
    cart: cartReducer,
    // categories: categoriesReducer,
    // product: productReducer,
    // ...other reducers
});

export default rootReducer;

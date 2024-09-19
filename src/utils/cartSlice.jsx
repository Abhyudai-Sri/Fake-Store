import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        products: [] 
    },
    reducers: {
        addProduct: (state, action) => {
            console.log("ysh kdjfjk     ")
            state.products.push(action.payload);
        },
        removeProduct: (state) => {
            state.products.pop();
        },
        clearProduct: (state) => {
            state.products.length = 0;
        }
    }

})

export const{addProduct, removeProduct, clearProduct} = cartSlice.actions;

export default cartSlice.reducer;
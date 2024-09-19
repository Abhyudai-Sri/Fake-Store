import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        products: [] 
    },
    reducers: {
        addProduct: (state, action) => {
            // console.log("ysh kdjfjk     ")
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            const proID = action.payload;
            state.products = state.products.filter(product => product.id !== proID)
        },
        clearProduct: (state) => {
            state.products.length = 0;
        }
    }

})

export const{addProduct, removeProduct, clearProduct} = cartSlice.actions;

export default cartSlice.reducer;
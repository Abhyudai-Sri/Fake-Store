import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        products: [] 
    },
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            
            const existingProduct = state.products.find(p => p.id === product.id)

            if(!existingProduct){
                state.products.push({...product, quantity: 1});
            }else{
                existingProduct.quantity += 1;
            }
        },
        removeProduct: (state, action) => {
            const proID = action.payload;
            state.products = state.products.filter(product => product.id !== proID)
        },
        decrementQuantity: (state, action) => {
            const product = action.payload
            
            const existingProduct = state.products.find(p => p.id === product);
            if(existingProduct && existingProduct.quantity > 1){
                existingProduct.quantity -= 1;
            }
        },
        incrementQuantity : (state, action) => {
            const product = action.payload

            const existingProduct = state.products.find(p => p.id === product)
            if(existingProduct){
                existingProduct.quantity += 1;
            }
        },

        clearProduct: (state) => {
            state.products= [];
        }
    }

})

export const{addProduct, removeProduct, clearProduct, decrementQuantity, incrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;
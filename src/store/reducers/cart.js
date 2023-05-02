

// import {createReducer} from '@reduxjs/toolkit';
// import { addToCart, modifyQuantityOfAnItem, removeItemFromCart, clearCart } from '../actions/cart';




// const initState = []

// export const cartReducer = createReducer(initState, (builder) => {
//     builder
//         .addCase(addToCart, (state, action) => {
//             const product = state.find(item => item.id === action.payload.id);

//             product ? product.quantity++ : state.push({...action.payload, quantity: 1})
//         })
//         .addCase(modifyQuantityOfAnItem, (state, action) => {
//             const targetedProduct = state.find(item => item.id === action.payload.id);
//             targetedProduct.quantity = action.payload.quantity
//         })
//         .addCase(removeItemFromCart, (state, action) => {
//             return state.filter(item => item.id !== action.payload)
//         })
//         .addCase(clearCart, (state, action) => {
//             return []
//         })

// })


import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const product = state.find(item => item.id === action.payload.id);

            product ? product.quantity++ : state.push({...action.payload, quantity: 1})
        },

        modifyQuantityOfAnItem(state, action) {
            const targetedProduct = state.find(item => item.id === action.payload.id);
            targetedProduct.quantity = action.payload.quantity
        },

        removeItemFromCart(state, action) {
            return state.filter(item => item.id !== action.payload)
        },

        clearCart() {
            return []
        },
    }
})

export const {addToCart, modifyQuantityOfAnItem, removeItemFromCart, clearCart} = cartSlice.actions;
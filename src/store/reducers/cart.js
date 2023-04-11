// export const cartReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'ADD_TO_CART' : {
//             const product = state.find(item => item.id === action.payload.id);

//             return product ? state.map(item => {
//                 if (item.id === action.payload.id) {
//                     item.quantity = item.quantity + 1
//                 }

//                 return item
//             }) : [...state, {...action.payload, quantity: 1}]
//         }

//         case 'REMOVE_ITEM_FROM_CART': {
//             return state.filter(item => item.id !== action.payload)
//         }

//         case 'MODIFY_QUANTITY_OF_AN_ITEM': {
//             return state.map(item => {
//                 if (item.id === action.payload.id) {
//                     item.quantity = action.payload.quantity
//                 }

//                 return item
//             })
//         }

//         case 'CLEAR_CART' : {
//             return []
//         }

//         default: {
//             return state
//         }
//     }
// }

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

// export const {addToCart, modifyQuantityOfAnItem, removeItemFromCart, clearCart} = cartSlice.actions;
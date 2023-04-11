// export const addToCart = (value) => {
//     return {
//         type: "ADD_TO_CART",
//         payload: value
//     }
// }

// export const modifyQuantityOfAnItem = (id, quantity) => {
//     return {
//         type: "MODIFY_QUANTITY_OF_AN_ITEM",
//         payload: {id, quantity}
//     }
// }

// export const removeItemFromCart = (id) => {
//     return {
//         type: "REMOVE_ITEM_FROM_CART",
//         payload: id
//     }
// }

// export const clearCart = () => {
//     return {
//         type: "CLEAR_CART"
//     }
// }

// import { createAction } from "@reduxjs/toolkit";

// export const addToCart = createAction('ADD_TO_CART');
// export const modifyQuantityOfAnItem = createAction('MODIFY_QUANTITY_OF_AN_ITEM')
// export const removeItemFromCart = createAction('REMOVE_ITEM_FROM_CART');
// export const clearCart = createAction('CLEAR_CART')

import { cartSlice } from "../reducers/cart";

const actions = cartSlice.actions;

export const addToCart = actions.addToCart;
export const modifyQuantityOfAnItem = actions.modifyQuantityOfAnItem;
export const removeItemFromCart = actions.removeItemFromCart;
export const clearCart = actions.clearCart
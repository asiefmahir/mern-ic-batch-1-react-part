// import {configureStore, combineReducers} from '@reduxjs/toolkit'

import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger'
import { ourMiddleWare } from '../middlewares';
import {cartReducer} from './reducers/cart'
import { todoReducer } from './reducers/todo';

const dummyReducer = (state = {counter: 0}, action) => {
    return state
}

const rootReducer = combineReducers({
    cart: cartReducer,
    dummy: dummyReducer,
    todos: todoReducer
})

export const store = createStore(rootReducer, applyMiddleware(ourMiddleWare))


// const rootReducer = combineReducers({
//     cart: cartSlice.reducer
// })

// export const store = configureStore({
//     reducer: rootReducer
// })
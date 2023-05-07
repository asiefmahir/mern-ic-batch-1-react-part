
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// // import logger from 'redux-logger'
// // import { ourMiddleWare } from '../middlewares';
// import thunk from 'redux-thunk'
// import {cartReducer} from './reducers/cart'
// import { todoReducer } from './reducers/todo';
// import { postReducer } from './reducers/post';

// const dummyReducer = (state = {counter: 0}, action) => {
//     return state
// }

// const rootReducer = combineReducers({
//     cart: cartReducer,
//     dummy: dummyReducer,
//     todos: todoReducer,
//     post: postReducer
// })

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {cartSlice} from './reducers/cart'
import {todoSlice} from './reducers/todo'
import { postSlice } from './reducers/post';
import {noteApi} from './features/notes/noteApi'



// const cartSlice = createSlice({


const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    [todoSlice.name]: todoSlice.reducer,
    [postSlice.name]: postSlice.reducer,
    [noteApi.reducerPath]: noteApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(noteApi.middleware)
})
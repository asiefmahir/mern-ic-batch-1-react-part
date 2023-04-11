import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'

import { cartReducer } from './reducers/cart';


const rootReducer = combineReducers({
    cart: cartReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
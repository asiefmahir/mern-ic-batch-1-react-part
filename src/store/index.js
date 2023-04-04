import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'

const initState = 0

const counterReducer = (state = initState, action) => {
    switch(action.type) {
        case 'counter/increase' : {
            return state + action.payload
        }

        case 'counter/decrease' : {
            return state - action.payload
        }

        default : {
            return state
        }
    }
}

const initThemeState = {
    bgColor: '#ffffff',
    color: '#000000'
}

const themeReducer = (state = initThemeState, action) => {
    switch(action.type) {
        case 'theme/changeBgColor' : {
            return {
                ...state,
                bgColor: action.payload
            }
        }

        case 'theme/changeTextColor' : {
            return {
                ...state,
                color: action.payload
            }
        }

        case 'theme/reset' : {
            return {
                bgColor: '#ffffff',
                color: '#000000'
            }
        }

        default : {
            return state
        }
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
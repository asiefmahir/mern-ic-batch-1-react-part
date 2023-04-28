const initState = {
    isLoading: true,
    todos: [],
    errorMessage: ''
}

export const todoReducer = (state = initState, action) => {
    switch(action.type) {
        case 'todo/fetchStart' : {
            return {
                ...state,
                isLoading: true
            }
        }

        case 'todo/fetchSucceeded' : {
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
                errorMessage: ''
            }
        }

        case 'todo/fetchFailed' : {
            return {
                ...state,
                isLoading: false,
                todos: [],
                errorMessage: action.payload
            }
        }

        default: {
            return state
        }
    }
}
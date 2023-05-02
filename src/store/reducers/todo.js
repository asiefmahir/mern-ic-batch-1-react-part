// const initState = {
//     isLoading: true,
//     todos: [],
//     errorMessage: ''
// }

// export const todoReducer = (state = initState, action) => {
//     switch(action.type) {
//         case 'todo/fetchStart' : {
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         }

//         case 'todo/fetchSucceeded' : {
//             return {
//                 ...state,
//                 isLoading: false,
//                 todos: action.payload,
//                 errorMessage: ''
//             }
//         }

//         case 'todo/fetchFailed' : {
//             return {
//                 ...state,
//                 isLoading: false,
//                 todos: [],
//                 errorMessage: action.payload
//             }
//         }

//         default: {
//             return state
//         }
//     }
// }

// Redux Toolkit Way

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initState = {
    isLoading: true,
    todos: [],
    errorMessage: ''
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch(`https://jsonplaceholder.typicodea.com/todos?_limit=6`);

    const data = await response.json();
    return data
})

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.todos = action.payload;
            state.errorMessage = ''
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.errorMessage = action.error.message;
            state.isLoading = false;
        })
    }
})
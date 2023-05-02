// 

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initState = {
    isLoading: true,
    posts: [],
    errorMessage: ''
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12`);

    const data = await response.json();
    return data
})

export const postSlice = createSlice({
    name: 'posts',
    initialState: initState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.errorMessage = ''
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.errorMessage = action.error.message;
            state.isLoading = false;
        })
    }
})
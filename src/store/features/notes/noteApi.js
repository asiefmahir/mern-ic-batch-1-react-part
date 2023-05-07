import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const noteApi = createApi({
    reducerPath: 'noteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/'
    }),
    tagTypes: ['Notes'],
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => 'notes',
            providesTags: ['Notes'],
            transformResponse: (res) => {
                console.log(res);
                return res.sort((a, b) => b.id - a.id)
            }
        }),

        createNote: builder.mutation({
            query: (note) => ({
                url: 'notes',
                method: 'POST',
                body: note
            }),
            
            invalidatesTags: ['Notes']
        }),

        updateNote: builder.mutation({
            query: (note) => ({
                url: `notes/${note.id}`,
                method: 'PUT',
                body: note
            }),

            invalidatesTags: ['Notes']
        }),

        deleteNote: builder.mutation({
            query: (id) => ({
                url: `notes/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Notes']
        })
    })
})

export const {useGetNotesQuery, useCreateNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation} = noteApi
// 3 ta notes -- cache

// 4 ta notes -- cache
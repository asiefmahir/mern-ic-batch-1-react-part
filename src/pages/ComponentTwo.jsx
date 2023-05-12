import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllNotes } from '../services/notes'
import Nav from '../components/Nav'

const ComponentTwo = () => {
    const {data: posts} = useQuery({
        queryKey: ['Notes'],
        queryFn: getAllNotes,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
  return (
    <>
        <Nav />
        <ul>
            {posts?.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </ul>
    </>
  )
}

export default ComponentTwo
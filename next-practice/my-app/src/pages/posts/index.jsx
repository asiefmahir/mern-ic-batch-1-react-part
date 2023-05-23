// import {useEffect} from 'react'
// import Helper from './helper'

import Nav from "@/components/Nav"

const Posts = ({posts}) => {
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts`)
    // }, [])
  return (
    <div>
        <Nav />
        {posts?.map(post => (
            <li key={post.id}>
                {post.title}
            </li>
        ))}
    </div>
  )
}

export const getStaticProps = async () => {
    console.log("I am running from server")
    const res = await fetch(`http://localhost:4000/posts`)
    const data = await res.json()
    return {
        props: {
            posts: data
        }
    }
}

export default Posts
import React from 'react'
import { useRouter } from 'next/router';


const PostDetails = ({post}) => {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div>Page generating on the server</div>
        )
    }
  return (
    <div>
        <h2>Details page</h2>
        <p>{post?.title}</p>
        <p>{post?.body}</p>
    </div>
  )
}


export const getStaticProps = async (context) => {
    const {params} = context;
    console.log(params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    console.log("calling")
  return {
    paths: [{params: {postId: '1'}}, {params: {postId: '2'}}, {params: {postId: '3'}}],
    fallback: true // 404
  };
}


export default PostDetails
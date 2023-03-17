import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

const PostDetails = () => {
    const [postData, setPostData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {postId} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setPostData(data)
            })
    }, [])
  return (
    <div>
        {isLoading && <h2>Loading......</h2>}
        <p>Post Details of id {postData?.id}</p>
        <p>UserId: {postData?.userId}</p>
        <p>Title: {postData?.title}</p>
        <p>Body: {postData?.body}</p>
    </div>
  )
}

export default PostDetails
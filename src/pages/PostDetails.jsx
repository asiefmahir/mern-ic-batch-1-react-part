import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/fetch';

const PostDetails = () => {

    const {postId} = useParams()


    const {data:post, isLoading, errorMessage} = useFetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`, null)


  return (
    <div>
        <h2>Details of the post including ID - {post?.id}</h2>
        <p>Title - {post?.title}</p>
        <p>Description - {post?.body}</p>
        <p>User Posted this post - {post?.userId}</p>

        {isLoading && <h2>Loading ........</h2>}
        {errorMessage && <h1>{errorMessage}</h1>}
    </div>
  )
}

export default PostDetails
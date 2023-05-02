import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchPost } from "../middlewares";
import Nav from "../components/Nav";
import { fetchPosts } from "../store/reducers/post";

const Posts = () => {

	const {isLoading, posts, errorMessage} = useSelector((state) => state.posts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

    
	return (
		<div>
			<Nav />
			<h2>All Posts</h2>
			{isLoading && <h1>Loading..........</h1>}
			{errorMessage && <h1>{errorMessage}</h1>}
			<ul>
				{posts.map((post) => (

						<li key = {post.id}>{post.title}</li>
					
				))}
			</ul>
		</div>
	);
};

export default Posts;

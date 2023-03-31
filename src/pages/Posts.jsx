import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/fetch";

const Posts = () => {

    const {data:posts, isLoading, errorMessage} = useFetchData(`https://jsonplaceholder.typicode.com/posts?_limit=5`, [])
    
	return (
		<div>
			<h2>All Posts</h2>
			{isLoading && <h1>Loading..........</h1>}
			{errorMessage && <h1>{errorMessage}</h1>}
			<ul>
				{posts.map((post) => (
					<Link key={post.id} to={`/posts/${post.id}`}>
						<li>{post.title}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Posts;

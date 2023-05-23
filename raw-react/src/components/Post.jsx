import { Component } from "react";

class Posts extends Component {

	render() {
        const {data:posts, isLoading, errorMessage} = this.props
		return (
			<div>
				<h2>All posts</h2>
                {isLoading && <p>Loading...</p>}
                {errorMessage && <p>{errorMessage}</p>}
                {posts.length > 0 && posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
			</div>
		);
	}
}

export default Posts;

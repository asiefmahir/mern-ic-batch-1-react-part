import React from 'react'
import { useFetchData } from '../hooks/fetch'
import { Link } from 'react-router-dom'

const Todos = () => {

    const {data:todos, isLoading, errorMessage} = useFetchData(`https://jsonplaceholder.typicode.com/todos?_limit=5`, [])
  return (
    <div>
			<h2>All Todos</h2>
			{isLoading && <h1>Loading..........</h1>}
			{errorMessage && <h1>{errorMessage}</h1>}
			<ul>
				{todos.map((post) => (
					<Link key={post.id} to={`/posts/${post.id}`}>
						<li>{post.title}</li>
					</Link>
				))}
			</ul>
		</div>
    )
}

export default Todos
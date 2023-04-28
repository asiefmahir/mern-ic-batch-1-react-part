import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux'

import { Link } from 'react-router-dom'
import Nav from '../components/Nav';

import {fetchTodo} from '../middlewares'

const Todos = () => {
	const {isLoading, todos, errorMessage} = useSelector((state) => state.todos);
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodo)
	}, [])


   
  return (
    <div>
		<Nav />
			<h2>All Todos</h2>
			{isLoading && <h1>Loading..........</h1>}
			{errorMessage && <h1>{errorMessage}</h1>}
			<ul>
				{todos.map((todo) => (
					
						<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
    )
}

export default Todos
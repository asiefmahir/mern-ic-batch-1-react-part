import { Component } from "react";

class Todos extends Component {

	render() {
        const {data: todos, isLoading, errorMessage} = this.props
		return (
			<div>
				<h2>All todos</h2>
                {isLoading && <p>Loading...</p>}
                {errorMessage && <p>{errorMessage}</p>}
                {todos.length > 0 && todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
			</div>
		);
	}
}

export default Todos;

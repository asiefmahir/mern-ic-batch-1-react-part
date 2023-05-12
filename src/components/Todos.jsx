import React, { Component } from 'react'
import { withFetch } from '../hoc/withFetch'

class Todos extends Component {
   
  render() {
    const {isLoading, data: todos, errorMessage} = this.props
    return (
      <div>
        <h2>todos:</h2>
        <ul>
            {isLoading && <p>Loading...</p>}
            {errorMessage && <p>{errorMessage}</p>}
            {todos.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
      </div>
    )
  }
}

export default withFetch(Todos, `https://jsonplaceholder.typicode.com/todos?_limit=5`, [])

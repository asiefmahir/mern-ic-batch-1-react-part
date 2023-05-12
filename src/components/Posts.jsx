import React, { Component } from 'react'
import { withFetch } from '../hoc/withFetch'

class Posts extends Component {
   
  render() {
    const {isLoading, data: posts, errorMessage} = this.props
    return (
      <div>
        <h2>Posts:</h2>
        <ul>
            {isLoading && <p>Loading...</p>}
            {errorMessage && <p>{errorMessage}</p>}
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      </div>
    )
  }
}

export default withFetch(Posts, `https://jsonplaceholder.typicode.com/posts?_limit=5`, [])

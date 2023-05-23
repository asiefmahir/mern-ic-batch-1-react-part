import React, { Component } from 'react'
import Todos from './Todos'

class CompoentWithDataFetching extends Component {
    

    state = {
        isLoading: true,
        data: [],
        errorMessage: ''
    }

    componentDidMount () {
        fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                isLoading: false,
                data: data,
                errorMessage: ''
            })
        })
        .catch(error => {
            this.setState({
                isLoading: false,
                data: [],
                errorMessage: error.message
            })
        })
    }
  render() {
    console.log(this.props.children)
    const {isLoading, data, errorMessage} = this.state
    return (
        <>
            {this.props.children(isLoading, data, errorMessage)}
        </>
    )
  }
}

{/* <Component>
    {(isLoading, data, errorMessage ) => {
        <Todos />
    
    }}
</Component> */}

export default CompoentWithDataFetching
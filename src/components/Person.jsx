import {Component} from 'react';
import Todos from './Todos';
import Posts from './Posts';

class Person extends Component {

    state = {
        counter: 0
    }

    increaseHandler = (payload) => {
        this.setState({...this.state, counter: this.state.counter + payload})
    }

    decreaseHandler = (payload) => {
        this.setState({...this.state, counter: this.state.counter - payload})
    }

    componentDidMount() {
        // console.log('componentDidMount')
        // fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             ...this.state,
        //             posts: data,
        //             isLoading: false,
        //             errorMessage: ''
        //         })
        //     })
        //     .catch(err => {
        //         this.setState({
        //             ...this.state,
        //             errorMessage: err.message,
        //             isLoading: false,
        //             posts: []
        //         })
        //     })
    }

    // useEffect (() => {}, [])

    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            alert('counter changed')
        }
    }

    // useEffect(() => {}, [counter])

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    // useEffect(() => {
    //     return () => {

    //     }
    // }, [])

    render() {
        console.log('I am rendering')
        const {name, age, skills} = this.props
        return (
           <>
                <div>
                    <p>name : {name}</p>
                    <p>age : {age}</p>
                </div>  
                <div className="skills">
                    <h2>My Skills</h2>
                    <ul>
                        {skills.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                </div>
                <div className="counter">
                    <p>the value of the counter is {this.state.counter}</p>
                    <button onClick={() => this.increaseHandler(1)}>Increase By 1</button>
                    <button onClick={() => this.increaseHandler(5)}>Increase By 5</button>

                    <button onClick={() => this.decreaseHandler(1)}>Decrease By 1</button>
                    <button onClick={() => this.decreaseHandler(10)}>Decrease By 10</button>

                </div>
                <Posts />
                <Todos />
           </>
        )
    }
}

export default Person

/**
 * 1) Suspense
 * 2) 
 */
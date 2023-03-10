import {useState, useReducer} from 'react'

// import { reducerFunc } from './reducers/counter';
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

// useState --> use State
// useReducer --> use Reducer

// const increaseCounter = 'increase_counter'


// const anotherReducer = (currentState, action) => {

// }

const reducerFunc = (currentState, action) => { // state === 500 // action === 'increase_counter
	console.log(currentState, 'crState');
	console.log(action, 'action')

	switch(action.type) {
		case 'increase_counter' : {
			return currentState + action.payload // 500 + 1 = 501
		}

		case 'decrease_counter' : {
			return currentState - action.payload
		}

		default : {
			return currentState
		}
	}

}
const App = () => {

	// const [counter, setCounter] = useState(1)

	// setCounter(counter + 1)

	const [counter, dispatch] = useReducer(reducerFunc, 500);
	// counter = 501
	// const [anotherState, dispatch2] = useReducer(anotherReducer, 0)

	return (
		<div className="App">
			<StudentForm />
			<StudentSection />
			{/* <p>The value of the counter is {counter}</p>

			<button onClick={() => dispatch({type: 'increase_counter', payload: 1})}>Increase By 1</button>
			<button onClick={() => dispatch({type: 'increase_counter', payload: 100})}>Increase By 100</button>
			<button onClick={() => dispatch({type: 'increase_counter', payload: 50})}>Increase By 50</button>
			<button onClick={() => dispatch({type: 'decrease_counter', payload: 1})}>Decrease By 1</button>
			<button onClick={() => dispatch({type: 'decrease_counter', payload: 10})}>Decrease By 10</button> */}


		</div>
	);
};

export default App;


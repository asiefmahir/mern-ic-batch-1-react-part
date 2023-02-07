import {useState} from 'react'
import "./App.css";

const App = () => {
	//component call === render
	// re-render === re-call
	//state
	console.log('I am being called in App')
	// state is a component's memory
	const [counter2, setCounter2] = useState(5);
	const [skills, setSkills] = useState(['js', 'react', 'redux'])
	// useState(6)
	// console.log(monKhushi)
	// console.log(janiNah)

	// let counter = 0;

	// counter2--

	const increaseHandler = () => {
		// counter++;
		// console.log(counter)
		setCounter2(counter2 + 1) // expression // counter2 + 1 -> 5 + 1 = 6
		// react's part => counter2 = 6
	}

	const decreaseHandler = () => {
		// counter--;
		// console.log(counter)
		setCounter2(counter2 - 1)
		// countrer2 = 1
	}

	const removeSkillHandler = (item) => {
		// skills.splice();

		// ['js', 'react', 'redux']
		const newSkills = skills.filter(skill => skill !== item);
		
		//                              'js' => 'js' !== 'js'
		//    							'react' => 'react' !== 'js'

		// console.log(newSkills, 'newSkills');
		// console.log(skills, 'skills')

		setSkills(newSkills)

		// setSkills(['react', 'redux'])
		// skills = ['react', 'redux']


	}

	return (
		<div className="App">
			<h2>The value of the counter is {counter2}</h2>
			<button onClick={increaseHandler}>Increase By 1</button>
			<button onClick={increaseHandler}>Increase By 100</button>

			<button onClick={decreaseHandler}>Decrease By 1</button>
			<button onClick={decreaseHandler}>Decrease By 10</button>

			<ul>
				{skills.map(item => (
					<li key={item}>
						<span>{item}</span>
						<button onClick={() => removeSkillHandler(item)}>Remove Me</button>
					</li>
				))}
			</ul>
		</div>
	)
}

// const usmahir = () => {
// 	return function () {
// 		return "hello"
// 	}
// }
// const amarMorji= usemahir()
export default App;

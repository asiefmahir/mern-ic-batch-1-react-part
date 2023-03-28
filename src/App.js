import {useState, useCallback, useMemo} from "react";
import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import Button from "./components/Button";


const App = () => {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(5);


	// Reference -> 00007F
	// Reference -> 002FCB
	const handleClick = useCallback(() => { 
		setCounter((prevState) => prevState + 1); // counter // 0 + 1 === 1 / counter = 1
	}, [])

	// Reference -> 0054DBS
	// Reference -> FF00CC

	const handleClick2 = useCallback(() => {
		setCounter2((prevState) => prevState + 5); // counter // 0 + 1 === 1 / counter = 1
	}, []);

	const isEven = useMemo(() => {
		console.log(" Iam called");
		let  i = 0;
		while (i < 1000000000) {
			i++
		}
		return counter % 2 === 0
	}, [counter]) // counter === 0 // return true
	// 0

	return (
		<div className="App">
			<Title />
			<div className="counter-app">
				<Counter value={counter}/>
				<Button handlerFunction={handleClick} />
				<p>{isEven === true ? `Counter value is Even` : `Counter Value is Odd`}</p>
			</div>
			<br />
			<hr />
			<div className="counter-app">
				<Counter value={counter2}/>
				<Button handlerFunction={handleClick2} />
			</div>
		</div>
	);
};

export default App;


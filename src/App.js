import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



const App = () => {

	const counter = useSelector((state) => state.counter);
	const theme = useSelector((state) => state.theme);

	const dispatch = useDispatch()
	console.log(counter, "Our Store State")
	

	return (
		<div style = {{
			backgroundColor: theme.bgColor,
			color: theme.color
		}} className="App">
			<div className="counter-app">
				<p>The value of the counter is {counter}</p>
				<button onClick={() => dispatch({type: 'counter/increase', payload: 1})}>Increase By 1</button>
				<button onClick={() => dispatch({type: 'counter/increase', payload: 5})}>Increase By 5</button>
				<button onClick={() => dispatch({type: 'counter/decrease', payload: 1})}>Decrease By 1</button>
				<button onClick={() => dispatch({type: 'counter/decrease', payload: 3})}>Decrease By 3</button>
			</div>
			<hr />
			<div>
				<button onClick={() =>dispatch({type: 'theme/changeBgColor', payload: 'green'})}>Change Background Color to Green</button>
				<button onClick={() =>dispatch({type: 'theme/changeBgColor', payload: 'purple'})}>Change Background Color to Purple</button>

				<button onClick={() =>dispatch({type: 'theme/changeTextColor', payload: 'red'})}>Change Text Color to Red</button>
				<button onClick={() =>dispatch({type: 'theme/changeTextColor', payload: 'blue'})}>Change Text Color to Blue</button>
				<button onClick={() =>dispatch({type: 'theme/reset'})}>Reset</button>


			</div>

		</div>
	);
};

export default App;


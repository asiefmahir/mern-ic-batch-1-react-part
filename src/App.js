import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
	console.log("rendering");
	const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([]);
	// const [counter, setCounter] = useState(0);
	// const [counter2, setCounter2] = useState(5);

	const getAllNotes = () => {
		fetch(`http://localhost:4000/notes`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setNotes(data);
			});
	};

	useEffect(() => {
		console.log("I am from useEffect");
		getAllNotes()
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!noteTitle) {
			return alert(`Please Provide a valid title`);
		}

		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};

		fetch(`http://localhost:4000/notes`, {
			method: "POST",
			body: JSON.stringify(newNote),
			headers: {
				"Content-type": "application/json",
			},
		}).then(() => {
			getAllNotes()
			setNoteTitle("");
		});
	};

	const removeHandler = (noteId) => {
		fetch(`http://localhost:4000/notes/${noteId}`, {
			method: "DELETE"
		})
			.then(() => {
				getAllNotes()
			})
	}
	// console.log(data)

	return (
		<div className="App">
			<h2>Hello server app</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={noteTitle}
					onChange={(e) => setNoteTitle(e.target.value)}
				/>
				<button type="submit">Create Note</button>
			</form>
			<ul>
				{notes.map((item) => (
					<li key={item.id}>
						<span>{item.title}</span>
						<button onClick={() => removeHandler(item.id)}>Remove</button>
					</li>
				))}
			</ul>
			{/* <p>The value of the counter is {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>Increase</button>
			<p>The value of the counter is {counter2}</p>
			<button onClick={() => setCounter2(counter2 + 1)}>Increase</button> */}
		</div>
	);
};

// const first = () => {
// 	let a = 10;
// 	second(a)
// }

// function second (num) {
// 	let b = 20;
// 	third(num, b)
// }

// const third = (num1, num2) => {
// 	return num1 + num2
// }

// first()
export default App;

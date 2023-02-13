import {useState} from 'react'
import "./App.css";

const App = () => {
	const [noteTitle, setNoteTitle] = useState('');
	const [notes, setNotes] = useState([])

	const [editMode, setEditMode] = useState(false)
	const [editableNote, setEditableNote] = useState(null)
	/**Object */
	// {} === {} {id: "1"}

	const createHandler = (e) => {
		e.preventDefault()
		if (!noteTitle) {
			alert(`Please provide a valid note title`);
			return
		}
		const newNote = {
			id: Date.now() + '',
			title: noteTitle
		}

		setNotes([newNote, ...notes])
		setNoteTitle('')
	}

	const removeHandler = (noteId) => { // noteId === 2
		const newNotes = notes.filter((item) => item.id !== noteId)
		//								() => '1' !== '2'
		// 								() => '2' !== '2'	
		setNotes(newNotes)
	}

	const editHandler = (noteId) => {
		const toBeEditedNote = notes.find((item) => item.id === noteId);
		setEditMode(true);
		setEditableNote(toBeEditedNote);
		setNoteTitle(toBeEditedNote.title)
	}

	const updateHandler = (e) => {
		e.preventDefault()
		if (!noteTitle) {
			alert(`Please provide a valid note title`);
			return
		}
		const newNotes = notes.map(item => {
			if (item.id === editableNote.id) { // '1' === '1'
				item.title = noteTitle
			}

			return item
		});

		setNotes(newNotes);
		setEditMode(false);
		setEditableNote(null);
		setNoteTitle('')

	}

	return (
		<div className="App">
			<form onSubmit={(e) => {
				editMode ? updateHandler(e) : createHandler(e)
			}}>
				<input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
				<button type="submit">{editMode ? 'Update Note': 'Add Note'}</button>
			</form>
			<ul>
				{notes.map(item => (
					<li key = {item.id}>
						<span>{item.title}</span>
						<button onClick={() => editHandler(item.id)}>Edit</button>
						<button onClick={() => removeHandler(item.id)}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App;

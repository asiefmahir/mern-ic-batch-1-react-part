import {useState} from 'react'
import { useGetNotesQuery, useCreateNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation } from '../store/features/notes/noteApi';
import Nav from '../components/Nav';

const Notes = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);
    const {data: notes, isFetching, isError, error} = useGetNotesQuery();
    const [addNote] = useCreateNoteMutation();
    const [updateNote] = useUpdateNoteMutation();
    const [removeNote] = useDeleteNoteMutation()

    const createHandler = () => {
        if (!noteTitle) {
            return alert (`You are not a dev`)
        }

        const newNote = {
            id: Date.now() + '',
            title: noteTitle
        }

        addNote(newNote);
        setNoteTitle('');
        
    }

    const editHandler = (note) => {
        setEditMode(true);
        setEditableNote(note);
        setNoteTitle(note.title);
    }

    const updateHandler = () => {
        if (!noteTitle) {
            return alert (`You are not a dev`)
        }

        const updatedNote = {
            id: editableNote.id,
            title: noteTitle
        }

        updateNote(updatedNote);

        setEditMode(false);
        setEditableNote(null);
        setNoteTitle('');
    }

    const deleteHandler = (id) => {
        removeNote(id)
    }

  return (
    <>
        <Nav />
        <form onSubmit={(e) => {
            e.preventDefault();
            editMode ? updateHandler() : createHandler();
        }}>
            <input type="text" value ={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} placeholder="Note Title" />
            <button type="submit">{editMode ? 'Update Note' : 'Add Note'}</button>
        </form>
        {isFetching && <p>Loading....</p>}
        {isError && <p>{error.message}</p>}
        <ul>
            {notes?.map(note => (
                <li key = {note.id}>
                    <span>{note.title}</span>
                    <button onClick ={() => editHandler(note)}>Edit</button>
                    <button onClick = {() => deleteHandler(note.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Notes
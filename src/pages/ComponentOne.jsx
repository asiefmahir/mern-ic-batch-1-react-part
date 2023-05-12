import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote, getAllNotes, updateNote, deleteNote } from '../services/notes';
import Nav from '../components/Nav';


const ComponentOne = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const client = useQueryClient()
  const {data: notes, isFetching, isError, error} = useQuery({
    queryKey: ['Notes'],
    queryFn: getAllNotes,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const createMutation = useMutation({
    mutationFn: (note) => createNote(note),
    onSuccess: () => {
      client.invalidateQueries(['Notes'])
    }
  })

  const updateMutation = useMutation({
    mutationFn: (note) => updateNote(note),
    onSuccess: () => {
      client.invalidateQueries(['Notes'])
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteNote(id),
    onSuccess: () => {
      client.invalidateQueries(['Notes'])
    }
  })

  const createHandler = () => {
    if (!noteTitle) {
      return alert (`provide a valid title`)
    }

    const newNote = {
      id: Date.now() + '',
      title: noteTitle
    }

    createMutation.mutate(newNote);
    setNoteTitle('');

  }

  const updateHandler = () => {
    if (!noteTitle) {
      return alert (`provide a valid title`)
    }

    const updatedNote = {
      id: editableNote.id,
      title: noteTitle
    }

    updateMutation.mutate(updatedNote);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle('');
  }

  const editHandler = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };

  const deleteHandler = (id) => {
    deleteMutation.mutate(id);
  }

    return (
      <>
        <Nav />
        <form onSubmit={(e) => {
          e.preventDefault()
          editMode ?  updateHandler() : createHandler();
        }}>
            <input type="text" value = {noteTitle} onChange={(e) => setNoteTitle(e.target.value )} placeholder="Title" />
            <button type='submit'>{editMode ? 'Update Note' : 'Add Note'} </button>
        </form>
        {isFetching && <p>Loading....</p>}
        {isError && <p>{error.message}</p>}
        <ul>
            {notes?.map(note => (
                <li key={note.id}>
                    <span>{note.title}</span>
                    <button onClick={() => editHandler(note)}>Edit</button>
                    <button onClick={() => deleteHandler(note.id)}>Delete</button>
                </li>
            ))}
        </ul>
      </>
    )
}

export default ComponentOne
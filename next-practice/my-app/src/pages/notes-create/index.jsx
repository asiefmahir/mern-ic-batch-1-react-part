import {useState} from 'react';
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';

const NoteCreatingForm = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const router = useRouter()
    const submitHandler = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:4000/notes`, {
            method: "POST",
            body: JSON.stringify({id: Date.now() + '', title: noteTitle }),
            headers: {
                'Content-type': 'application/json'
            }
        });

        router.push('/notes')
    }
  return (
    <>
        <Nav />
        <form onSubmit={submitHandler}>
            <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
            <button type="submit">Create Note</button>
        </form>
    </>
  )
}

export default NoteCreatingForm
import Nav from '@/components/Nav';
import {useState} from 'react'

const PostForm = () => {
    const [title, setTitle] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        
        await fetch(`http://localhost:4000/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: Date.now() + '',
                title: title
            })
        })

        await fetch(`http://localhost:3000/api/posts`)
    }


  return (
    <>
        <Nav />
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button type='submit'>Create Post</button>
        </form>
    </>
  )
}

export default PostForm
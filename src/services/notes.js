const baseUrl = `http://localhost:4000`;

export const getAllNotes = async () => {
    const res = await fetch(`${baseUrl}/notes`);
    return res.json()
}

export const createNote = async (note) => (
    await fetch(`${baseUrl}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note)

    })
)

export const updateNote = async (note) => (
    await fetch(`${baseUrl}/notes/${note.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
)

export const deleteNote = async (id) => (
    await fetch(`${baseUrl}/notes/${id}`, {
        method: 'DELETE',
    })
)
    

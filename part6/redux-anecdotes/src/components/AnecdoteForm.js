import React from 'react'
import { createNote } from '../reducers/anecdoteReducer'

const newAncedote = (props) => {
    const addNote = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        props.store.dispatch(
            createNote(content)
        )
    }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addNote}>
                <div><input name='note' /></div>
                <button>create</button>
            </form>
        </>
    )
}

export default newAncedote
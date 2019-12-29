import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'

const newAncedote = (props) => {
    const addNote = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        props.createNote(content)

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

const mapDispatchToState = {
    createNote
}
export default connect(null, mapDispatchToState)(newAncedote)
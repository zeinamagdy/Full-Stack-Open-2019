import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotesService'

const newAncedote = (props) => {
    const addNote = async (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        const newAncedote = await anecdotesService.createNew(content)
        props.createNote(newAncedote)

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
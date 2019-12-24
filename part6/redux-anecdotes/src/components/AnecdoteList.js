import React from 'react'
import { voteNote } from '../reducers/anecdoteReducer'
import { votedNoteChange } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
    const { notes, _notification, filter } = store.getState()
    const vote = (id) => {
        store.dispatch(
            voteNote(id)
        )
        store.dispatch(votedNoteChange(notes.find(anecdote => anecdote.id === id))
        )
    }
    const anecdoteToShow = () => {
        if (filter !== "")
            return notes.filter(n => n.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
        else
            return notes
    }
    return (
        <ul>
            {anecdoteToShow().map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </ul>

    )
}

export default AnecdoteList
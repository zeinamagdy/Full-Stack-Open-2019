import React from 'react'
import { voteNote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({ store }) => {
    const vote = (id) => {
        console.log('vote', id)
        store.dispatch(
            voteNote(id)
        )
    }
    return (
        <ul>
            {store.getState().map(anecdote =>
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
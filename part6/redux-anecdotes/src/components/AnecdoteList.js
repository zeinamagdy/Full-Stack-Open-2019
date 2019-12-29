import React from 'react'
import { voteNote } from '../reducers/anecdoteReducer'
import { votedNoteChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
    const vote = (id) => {
        props.voteNote(id)
        props.votedNoteChange(props.anecdotes.find(anecdote => anecdote.id === id))
    }
    return (
        <ul>
            {props.visibleAnecdotes.map(anecdote =>
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

const anecdoteToShow = ({ notes, notification, filter }) => {
    if (filter !== "")
        return notes.filter(n => n.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    else
        return notes
}
const mapDispatchToState = {
    votedNoteChange,
    voteNote
}
const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdoteToShow(state),
        anecdotes: state.notes

    }
}

export default connect(mapStateToProps, mapDispatchToState)(AnecdoteList)
import React from 'react'
import { voteNote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
    const vote = (anecdote) => {
        props.voteNote(anecdote)
        props.setNotification(`you voted '${anecdote.content}'`, 3000)
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
                        <button onClick={() => vote(anecdote)}>vote</button>
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
    setNotification,
    voteNote,
    clearNotification
}
const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdoteToShow(state),
        anecdotes: state.notes

    }
}

export default connect(mapStateToProps, mapDispatchToState)(AnecdoteList)
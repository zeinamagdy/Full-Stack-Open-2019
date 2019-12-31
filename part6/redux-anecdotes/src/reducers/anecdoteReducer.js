import anecdoteService from '../services/anecdotesService'

export const voteNote = (anecdote) => {
  return async dispatch => {
    const votedNote = await anecdoteService.voteNote(anecdote)
    dispatch({
      type: 'VOTE_NOTE',
      data: { votedNote }
    })
  }
}
export const createNote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'ADD_NOTE',
      data: newAnecdote
    })
  }
}
export const initializeNotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes,
    })
  }
}

const reducerNotes = (state = [], action) => {
  switch (action.type) {
    case 'INIT_NOTES':
      return action.data
    case 'VOTE_NOTE':
      const votedNote = action.data.votedNote
      const newNotes = state.map(note => note.id !== votedNote.id ? note : votedNote)
      return newNotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
    case 'ADD_NOTE':
      return [...state, action.data]
    default:
      return state

  }

}

export default reducerNotes
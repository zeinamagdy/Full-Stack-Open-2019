export const voteNote = (id) => {
  return {
    type: 'VOTE_NOTE',
    data: { id }
  }
}
export const createNote = (anecdote) => {
  return {
    type: 'ADD_NOTE',
    data: anecdote
  }
}
export const initializeNotes = (notes) => {
  return {
    type: 'INIT_NOTES',
    data: notes,
  }
}

const reducerNotes = (state = [], action) => {
  switch (action.type) {
    case 'INIT_NOTES':
      return action.data
    case 'VOTE_NOTE':
      const id = action.data.id
      const NoteToVote = state.find(note => note.id === id)
      const votedNote = { ...NoteToVote, votes: NoteToVote.votes + 1 }
      const newNotes = state.map(note => note.id !== id ? note : votedNote)
      return newNotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
    case 'ADD_NOTE':
      return [...state, action.data]
    default:
      return state

  }

}

export default reducerNotes
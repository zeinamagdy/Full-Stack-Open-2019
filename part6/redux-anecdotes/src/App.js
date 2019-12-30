import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeNotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotesService'
const App = (props) => {
  useEffect(() => {
    anecdoteService
      .getAll().then(notes => props.initializeNotes(notes))
  })

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter></Filter>
      <Notification></Notification>
      <AnecdoteList></AnecdoteList>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default connect(null, { initializeNotes })(App)
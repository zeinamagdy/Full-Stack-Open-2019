import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import reducerNotes from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
// import { createNote } from './reducers/anecdoteReducer'
// import { filterChange } from './reducers/filterReducer'


const reducer = combineReducers({
  notes: reducerNotes,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducer)

store.subscribe(() => console.log('index', store.getState()))
// store.dispatch(createNote('combineReducers forms one reduces from many simple reducers'))


const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import { Table, Form, Button, Alert, Navbar, Nav } from 'react-bootstrap'
const Menu = (props) => {







  const padding = {
    paddingRight: 5
  }
  return (
    <Router>
      <div>
        {/* <div>
          <Link href='#' style={padding} to='/'>anecdotes</Link>
          <Link href='#' style={padding} to='/create'> create new</Link>
          <Link href='#' style={padding} to='/about'>about</Link>
        </div> */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/">Anecdotes</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/create">Create new</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/about">About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" render={() =>
          < AnecdoteList anecdotes={props.anecdotes} notification={props.notification} />
        } />
        <Route exact path="/create" render={() =>
          <CreateNew addNew={props.addNew} />
        } />
        <Route exact path="/about" render={() =>
          <About />
        } />
        <Route exact path="/anecdotes/:id" render={({ match }) =>
          <Anecdote anecdote={props.anecdoteById(match.params.id)} />
        } />
      </div>
    </Router>

  )
}

const AnecdoteList = (props) => (
  <div>
    <h2>Anecdotes</h2>
    {props.notification ?
      <Notification notification={props.notification} />
      :
      <div></div>}
    <Table striped bordered hover>
      <tbody>
        {props.anecdotes.map(anecdote =>
          <tr key={anecdote.id} >
            <td>
              <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
            </td>
            <td>
              {anecdote.author}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </div>
)
const Anecdote = ({ anecdote }) => (
  <div>
    <strong>{anecdote.content}</strong>
    has {anecdote.votes} votes
    for more information see : <a href='{anecdote.info}' >{anecdote.info}</a>
  </div>
)
const Notification = ({ notification }) => {

  return (
    <div> <Alert variant="success">{notification} created!</Alert></div>
  )
}
const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNewHistory = (props) => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')

  const handleSubmit = (e) => {
    console.log('create')
    e.preventDefault()
    props.addNew({
      content,
      author,
      info,
      votes: 0
    })
    props.history.push('/')
  }
  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>content</Form.Label>
          <Form.Control name='content' value={content} onChange={(e) => setContent(e.target.value)} />

          <Form.Label>author</Form.Label>
          <Form.Control name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />

          <Form.Label> URL for more info</Form.Label>
          <Form.Control name='info' value={info} onChange={(e) => setInfo(e.target.value)} />
          <Button variant="primary" type="submit">
            create
          </Button>
        </Form.Group>
      </Form>
    </div>
  )

}
const CreateNew = withRouter(CreateNewHistory)

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setNotification(anecdote.content)
    setTimeout(() => {
      setNotification('')
    }, 2000);
    return {
      anecdotds: setAnecdotes(anecdotes.concat(anecdote)),
      notification: notification
    }
  }

  const anecdoteById = (id) => {
    return anecdotes.find(a => a.id === id)
  }
  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div className="container">
      <h1>Software anecdotes</h1>

      <Menu anecdotes={anecdotes} addNew={addNew} anecdoteById={anecdoteById} notification={notification} />
      <Footer />
    </div>
  )
}

export default App;
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('');
  const handelNewName = (event) => {
    setNewName(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault();
    if(newName.length === 0){
      return;
    }
    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject));
    setNewName('');
  }
  const rows = () => 
      persons.map((person) => <li key = {person.name}>{person.name}</li>)
    
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input type = 'text' onChange = {handelNewName} value = {newName} />
        </div>
        <div>
          <button type = "submit" onClick = {addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App
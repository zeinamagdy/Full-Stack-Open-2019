import React, { useState } from 'react';
import Filter from './Components/Filter';
import Persons from './Components/Persons';
import PersonForm from './Components/PersonForm ';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [result, setResult] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


  const handelNewName = (event) => {
    setNewName(event.target.value)
  }
  const handelNewNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const handelSearch = (event) => {
    let searchKeyword = event.target.value.toLowerCase();
    if (searchKeyword.length > 0) {
      setResult(persons.filter((person) => person.name.toLowerCase().includes(searchKeyword)));
    } else {
      setResult(persons);
    }
  }

  const addName = (event) => {
    event.preventDefault();
    if (newName.length === 0 || newNumber.length === 0) {
      return;
    }
    if (persons.find((person) => person.name === newName) === undefined) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      const newlist = persons.concat(personObject)
      setPersons(newlist);
      setResult(newlist);
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already added to phoneBook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onSearch={handelSearch} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onChangeName={handelNewName}
        onChangeNumber={handelNewNumber}
        OnNameAdded={addName} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={result} />
      </ul>
    </div>
  )
}

export default App
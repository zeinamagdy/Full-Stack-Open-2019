import React, { useState, useEffect } from 'react';
import Filter from './Components/Filter';
import Persons from './Components/Persons';
import PersonForm from './Components/PersonForm ';
import personService from './services/persons';



const App = () => {
  const [persons, setPersons] = useState([]);
  const [result, setResult] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const hook = () => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setResult(initialPersons)
      })
  }
  useEffect(hook, [])



  const handelNewName = (event) => {
    setNewName(event.target.value)
  }
  const handelNewNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const handelSearch = (event) => {
    let searchKeyword = event.target.value.toLowerCase();
    if (searchKeyword.length > 0) {
      setResult(result.filter((person) => person.name.toLowerCase().includes(searchKeyword)));
    } else {
      setResult(persons);
    }
  }
  const deletePerson = (person) => {
    personService.deletePerson(person)
      .then(response => {
        setPersons(result.filter((item) => item.id !== person.id))
        setResult(result.filter((item) => item.id !== person.id))
      })


  }
  const addName = (event) => {
    event.preventDefault();
    if (newName.length === 0 || newNumber.length === 0) {
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (result.find((person) => person.name === newName) === undefined) {
      personService.create(personObject)
        .then(person => {
          setPersons(persons.concat(person));
          setResult(result.concat(person));
          setNewName('');
          setNewNumber('');
        })
    } else {
      window.confirm(`${newName} is already added to the phonebook, replace old number with new? `) &&
        updateNumber(personObject)

    }
  }
  const updateNumber = personObject => {
    const oldObject = result.find((item) => item.name === personObject.name);
    const oldPerson = result.filter((item) => item.name !== personObject.name)
    personService.update(oldObject.id, personObject)
      .then(person => {
        setPersons(oldPerson.concat(person));
        setResult(oldPerson.concat(person));
        setNewName('');
        setNewNumber('');
      });
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
        <Persons persons={result} deletePerson={deletePerson} />
      </ul>
    </div>
  )
}

export default App
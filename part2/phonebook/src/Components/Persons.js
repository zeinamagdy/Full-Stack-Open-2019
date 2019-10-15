import React from 'react';

const Persons = ({ persons, deletePerson }) => {
    return persons.map((person) =>
        <li key={person.id}>
            {person.name} {person.number}
            <button
                onClick={() =>
                    window.confirm(`Delete ${person.name}?`) &&
                    deletePerson(person)
                }
            >
                Delete
            </button>
        </li>)
}
export default Persons
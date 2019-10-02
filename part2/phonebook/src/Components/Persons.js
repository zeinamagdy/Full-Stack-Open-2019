import React from 'react';

const Persons = ({ persons }) => {
    return persons.map((person) =>
        <li key={person.name}>
            {person.name} {person.number}
        </li>)
}
export default Persons
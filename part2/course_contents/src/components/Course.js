import React from 'react';

const Header = ({ name }) => {
    return <h3>{name}</h3>
}
const Total = ({ parts }) => {
    const total = parts.reduce((accumulator, part) => {
        return accumulator + part.exercises
    }, 0)
    return <p>total of {total} exercises</p>
}
const Content = ({ parts }) => {
    return (
        parts.map((part, index) => <p key={index}>{part.name}{part.exercises}</p>)
    )
}
const Course = ({ course }) => {
    return (
        <div key ={course.id}> 
            <Header name={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}
export default Course;
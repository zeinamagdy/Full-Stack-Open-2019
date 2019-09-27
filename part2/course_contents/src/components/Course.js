import React from 'react';

const Header = ({ name }) => {
    return <h1>{name}</h1>
}
const Total = ({ parts }) => {
    let total = 0;
    parts.forEach(part => {
        total += part.exercises;
    });
    return <p>total of {total} exercises</p>
}
const Content = ({ parts }) => {
    return (
        parts.map((part, index) => <p key={index}>{part.name}{part.exercises}</p>)
    )
}
const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name}></Header>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}
export default Course;
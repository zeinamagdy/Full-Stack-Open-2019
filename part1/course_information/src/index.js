import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    
    const course = 'Half Stack application development';
    const parts = [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
    ];
    const Header = (props) =>{
        console.log('header',props)
        return <h1>{props.name}</h1>

    }
    const Content = (props) => {
        console.log('Content', props.parts)
        return  (
            <>
                <p> {props.parts[0].name} {props.parts[0].exercises}</p>
                <p> {props.parts[1].name} {props.parts[1].exercises}</p> 
                <p> {props.parts[2].name} {props.parts[2].exercises}</p>
            </>
        )  
    }
    const Total = (props) =>{
        console.log('total', props)
        return ( 
            <p> 
                Number of exercises { props.parts[0].exercises +
                                    props.parts[1].exercises + 
                                    props.parts[2].exercises } 
            </p>);
    }
  
    return (
        <div>
            <Header name = {course}></Header>
            <Content parts = {parts}></Content>
            <Total parts = {parts}></Total>
        </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

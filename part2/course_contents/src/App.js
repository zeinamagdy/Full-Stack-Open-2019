import React from 'react'
import Course from './components/Course'

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      },
      {
        name: 'java script Es6',
        exercises: 12
      }
    ]
  } 

  return (
    <div>
     <Course course ={course}></Course>
    </div>
  )
}

export default App;

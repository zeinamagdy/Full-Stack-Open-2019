import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick = {props.handelClik}>{props.text}</button>
)
const Display = (props) =>
    <div>{props.text} {props.value}</div>

const App = () => {
  // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0);
    const [average, setAverage] = useState(0);
    const [postive, setPostive] = useState(0);
    useEffect(() => {
        console.log("effect called")
        if (all > 0){
            setAverage((good-bad) / all);
            setPostive (good * 100 /all);
        }
    }, [good, bad, all])
  
    const handelClickEvent = (type) =>{
      console.log('click',all);
        switch(type){
            case 'good':
                setGood(good+1);
                setAll(all+1);
            break;
            case 'neutral':
                setNeutral(neutral +1);
                setAll(all+1);
            break;
            case 'bad':
                setBad(bad +1);
                setAll(all+1);
            break;
            default:
            break;
      }

  }

  return (
    <div>
        <h1>give feedback</h1>
        <Button handelClik = {() => handelClickEvent('good')} text = 'good'></Button>
        <Button handelClik = {() => handelClickEvent('neutral')} text = 'neutral'></Button>
        <Button handelClik = {() => handelClickEvent('bad')} text = 'bad'></Button>
        <h1>statistics</h1>
        <Display text = 'good' value = {good}></Display>
        <Display text = 'neutral' value = {neutral}></Display>
        <Display text = 'bad' value ={bad}></Display>
        <Display text = 'all' value ={all}></Display>
        <Display text = 'average' value = {average}></Display>
        <Display text = 'postive' value = {postive + " %"}></Display>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
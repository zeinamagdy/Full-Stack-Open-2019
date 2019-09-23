import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick = {props.handelClik}>{props.text}</button>
)
const Statistic = (props) => {
  return(<tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>)
}
const Statistics = (props) => {
  let calcultedValues = false;
  if (props.allValue > 0) {
    calcultedValues = true;
  }
  return (
    <div>
      <h1>statistics</h1>
      {calcultedValues?(<tabel><tbody>
        <Statistic text = 'good' value = {props.goodValue}></Statistic>
        <Statistic text = 'neutral' value = {props.neutralValue}></Statistic>
        <Statistic text = 'bad' value = {props.badValue}></Statistic>
        <Statistic text = 'all' value = {props.allValue}></Statistic>
        <Statistic text = 'average' value = {props.averageValue}></Statistic>
        <Statistic text = 'postive' value = {props.postiveValue + " %"}></Statistic>
        </tbody></tabel>):(
        <div>
          No feedback given
        </div>)
        }
    </div>
)}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [postive, setPostive] = useState(0);
  useEffect(() => {
      if (all > 0){
          setAverage((good-bad) / all);
          setPostive (good * 100 /all);
      }
  }, [good, bad,neutral, all])
  
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
        <Button handelClik =  {() => handelClickEvent('good')} text = 'good'></Button>
        <Button handelClik = {() => handelClickEvent('neutral')} text = 'neutral'></Button>
        <Button handelClik = {() => handelClickEvent('bad')} text = 'bad'></Button>
        <Statistics 
          goodValue = {good}
          neturalValue = {neutral} 
          badValue = {bad} 
          postiveValue = {postive}
          averageValue = {average}
          allValue = {all}>
        </Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
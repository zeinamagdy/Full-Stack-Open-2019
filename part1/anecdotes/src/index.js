import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const[vote, setVote] = useState(new Array(anecdotes.length).fill(0));
    const [max, setMax] = useState(0);
    const getRandom = () => {
        setSelected(Math.floor(Math.random()*anecdotes.length));
    }
    const addVote = () => {
        const copy = [...vote];
        copy[selected] +=1;
        setVote(copy);
        // update max
        if(copy[selected] > copy[max]) {
            setMax(selected);
        }
    } 
    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <div>has {vote[selected]} vote</div>
            <div>
                <button onClick = {() => getRandom()}>next anecdote</button>
                <button onClick = {() => addVote()}>Vote</button>
            </div>
            <div>
                <h1>Anecdote with most votes</h1>
                <div>
                    {props.anecdotes[max]}
                    <div>has {vote[max]} vote</div>
                </div>
            </div>
        </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

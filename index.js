import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = (props) => {
  return (
    <tr> 
      <td>{props.name} </td><td> {props.value} </td>  
   </tr>
 
  )
}

const Statistics = (props) => {

    let {good, bad, neutral}= props

    if (good+bad+neutral === 0) return (<div>No feedback yet!</div>)

    return (<div><table><tbody>
            <Statistic name="Good" value={good}/>
            <Statistic name="Neutral" value={neutral} />
            <Statistic name ="Bad" value = {bad}/>
            <tr><td>Avarage:</td><td> {(good-bad)/(good+bad+neutral)} </td></tr>
            <tr><td>Positive:</td><td> {100*good/(good+bad+neutral)}%</td></tr>
            </tbody></table>
      </div>
)
}


const Button = (props) => {

  return (
    <button onClick={props.handleclick} type="button">{props.text}</button> 
  )
}

const App = () => {
  // Saving the clicks
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h1>Give your feedback:</h1>
        <Button handleclick={()=>setGood(good+1)} text="Good"/> 
        <Button handleclick={()=>setNeutral(neutral+1)} text="Neutral"/> 
        <Button handleclick={()=>setBad(bad+1)} text="Bad"/> 
        <h2>Statistics:</h2>
        <Statistics good={good} neutral={neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

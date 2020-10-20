import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
<button onClick = {props.handleClick}>
  {props.text}
</button>
)



const App = () => {
  const [good, setGood] = useState(0)
  const [neutal, setNeutral] =useState (0)
  const [bad, setBad] = useState (0)
  
  return (
    <div>
      <h1>Please give your feedback</h1>
      <Button handleClick = {() => setGood(good + 1)} text="Good"/>
      <Button handleClick = {() => setNeutral(neutal + 1)} text="Neutral"/>
      <Button handleClick = {() => setBad(bad + 1)} text="Bad"/>
      <h1>Statstics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutal}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}
 
  ReactDOM.render(<App   />,
  document.getElementById('root'))

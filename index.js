import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
 //console.log(course)
    return(
    <h1>{course}</h1> 
  ) 
}

const Part = ({part}) => {
  console.log(part);
  return (
      <p>
          {part.name} {part.exercises}
      </p>
  )
}

const Content = ({parts}) => {
  return (
      <div>
          <Part part={parts[0]} />
          <Part part={parts[1]} />
          <Part part={parts[2]} />
      </div>
  )
}

const Total = ({parts}) => {
  return (
      <p>Total number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}


const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
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
      ]
  }

  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

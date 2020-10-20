import React from 'react'

const Course = (props) => 
    <>{props.map(p =>
    <div key={p.id}>{OneCourse(p)}</div>
    )} </>

const OneCourse = (props) =>{
    return (
        <>
         <div>{Header(props)}</div>
         <div>{Content(props.parts)}</div>
         <div>{Total(props.parts)}</div>
        
        </>
    )
}

const Header = (props) =>
    <div>
        <h1>{props.name}</h1>
    </div>

const Content = (props) =>
    <>{props.map(p=>
    <div key ={p.id}>{p.name}: {p.exercise}</div>)}</>

const Total = (props) =>
    <p>total: {props.reduce((sum, part) => sum + part.exercises, 0)}</p>

    export default Course  
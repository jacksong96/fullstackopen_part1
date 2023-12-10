import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header=(props)=> {
  return(
    <h1>{props.course}</h1>
  )
}

const Content=(props)=> {
  return(
    <div>
      <Part part = {props.content[0].part} exercise={props.content[0].exercise}/>
      <Part part = {props.content[1].part} exercise={props.content[1].exercise}/>
      <Part part = {props.content[2].part} exercise={props.content[2].exercise}/>
    </div>
  )
}

const Part=(props) =>{
  return(
    <p>{props.part} {props.exercise}</p>
  )
}

const Total=(props)=> {
  return(
    <p>Number of exercises {props.total}</p>
  )
}

const App =()=> {
  const content = [
    {part:'Fundamentals of React', exercise:10},
    {part:'Using props to pass data', exercise:7},
    {part:'State of a component', exercise:14}
  ]
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total total={content[0].exercise+content[1].exercise+content[2].exercise}/>
    </div>
  )
}

export default App

import React from 'react'
import './App.css'
import Mountains from './assets/mountains.png';
function App() {
  return (
    <>
      <h1>Welcome to React.js class</h1>
      <h1>RESUME</h1>
      <li>NAME:PARNA ROY</li>
      <li>PHONE NUMBER: 9432728994</li>
      <li>COLLEGE: NETAJI SUBHASH ENGINEERING COLLEGE</li>

  <First/>
  <Second/>
  <Third/>
  <Fourth/>
  <Fifth/>

    </>
  )
}

function First() {
  return(
    <h1>WELCOME TO THE FIRST COMPONENT</h1>
  )
} 
function Second() {
  return(
    <h1>WELCOME TO THE SECOND COMPONENT</h1>
  )
  
}
function Third() {
  return(
    <h1>WELCOME TO THE THIRD COMPONENT</h1>
  )
  
}
function Fourth() {
  return(
    <h1>WELCOME TO THE FOURTH COMPONENT</h1>
  )
  
}
function Fifth() {
  return(
    <>
      <h1>WELCOME TO THE FIFTH COMPONENT</h1>
    <img src={Mountains} alt={Mountains} height={'400px'} width={'400px'}></img>
    </>
  )
  
}

export default App

import React from 'react'
import './App.css'
import Mountains from './assets/images/mountains.png';
import Pic1 from './assets/images/pic1.png';
import Pic2 from './assets/images/pic2.png';
import Pic3 from './assets/images/pic3.png';
import Pic4 from './assets/images/pic4.png';

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
  <Staff/>

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

function Staff() {
  return(
    <div className="staff">
      <Card title="Vice-Principal ( Academics )" image={Pic1} />
      <Card title="Vice-Principal ( Co-curricular )" image={Pic2} />
      <Card title="Teacher-In Charge" image={Pic3} />
      <Card title="Head Master" image={Pic4} />
    </div>
  )
}

function Card({ title, image }) {
  return(
    <div className="card">
      <img src={image} alt={title} width={'250px'}></img>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css';
import Cube1 from './Cube1/Cube1'

function App() {
  const [cursorOverCube, setCursorOverCube] = useState(false)
  const [cursorGrabbingCube, setCursorGrabbingCube] = useState(false)
  const [cursorCurrentPosition, setCursorCurrentPosition] = useState(0)
  const [cursorGrabPosition, setCursorGrabPosition] = useState(0)
  const [cubeLastRotation, setCubeLastRotation] = useState(0)

  const handleOnMouseOver = () => {
    setCursorOverCube(true)
  }
  const handleOnMouseOut = () => {
    setCursorOverCube(false)
  }
  const handleOnMouseDown = (e) => {
    setCursorGrabbingCube(true)
    setCursorGrabPosition(e.clientX)
  }
  const handleOnMouseUp = () => {
    setCursorGrabbingCube(false)
    if (cursorGrabbingCube == true) {
      setCubeLastRotation(cubeLastRotation - (cursorGrabPosition - cursorCurrentPosition) / 3)
    }
  }
  const handleOnMouseMove = (e) => {
      setCursorCurrentPosition(e.clientX)
  }

  if (cursorGrabbingCube == true) {
    document.querySelector('body').style.cursor = 'grabbing'
    document.getElementById('cube').style.transform = `rotateX(-20deg) rotateY(${cubeLastRotation - (cursorGrabPosition - cursorCurrentPosition) / 3}deg)`
  }
  else if (cursorOverCube == true && cursorGrabbingCube == false) {
    document.querySelector('body').style.cursor = 'grab'
  }
  else {
    document.querySelector('body').style.cursor = 'auto'
  }
  if (Math.abs(cubeLastRotation) >= 360) {
    setCubeLastRotation(cubeLastRotation % 360)
  }

  return (
    <div className="App" onMouseUp={handleOnMouseUp} onMouseMove={handleOnMouseMove}>
      <Cube1 
      handleOnMouseOver={handleOnMouseOver}
      handleOnMouseOut={handleOnMouseOut}
      handleOnMouseDown={handleOnMouseDown} />
    </div>
  );
}

export default App;

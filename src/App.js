import { useState } from 'react'
import './App.css';
import Cube1 from './Cube1/Cube1'

function App() {
  const [cursorOverCube, setCursorOverCube] = useState(false)
  const [cursorGrabbingCube, setCursorGrabbingCube] = useState(false)
  const [cursorCurrentPosition, setCursorCurrentPosition] = useState([0, 0])
  const [cursorGrabPosition, setCursorGrabPosition] = useState([0, 0])
  const [cubeLastRotation, setCubeLastRotation] = useState([0, 0])

  console.log(cubeLastRotation)

  const handleOnMouseOver = () => {
    setCursorOverCube(true)
  }
  const handleOnMouseOut = () => {
    setCursorOverCube(false)
  }
  const handleOnMouseDown = (e) => {
    setCursorGrabbingCube(true)
    setCursorGrabPosition([e.clientX, e.clientY])
  }
  const handleOnMouseUp = () => {
    setCursorGrabbingCube(false)
    if (cursorGrabbingCube == true) {
      setCubeLastRotation([cubeLastRotation[0] - (cursorGrabPosition[0] - cursorCurrentPosition[0]) / 3, cubeLastRotation[1] + (cursorGrabPosition[1] - cursorCurrentPosition[1]) / 3])
    }
  }
  const handleOnMouseMove = (e) => {
      setCursorCurrentPosition([e.clientX, e.clientY])
  }

  if (cursorGrabbingCube == true) {
    document.querySelector('body').style.cursor = 'grabbing'
    document.getElementById('cube').style.transform = `rotateX(${cubeLastRotation[1] + (cursorGrabPosition[1] - cursorCurrentPosition[1]) / 3}deg) rotateY(${cubeLastRotation[0] - (cursorGrabPosition[0] - cursorCurrentPosition[0]) / 3}deg)`
  }
  else if (cursorOverCube == true && cursorGrabbingCube == false) {
    document.querySelector('body').style.cursor = 'grab'
  }
  else {
    document.querySelector('body').style.cursor = 'auto'
  }
  if (Math.abs(cubeLastRotation[0]) >= 360) {
    setCubeLastRotation([cubeLastRotation[0] % 360, cubeLastRotation[1]])
  }
  if (Math.abs(cubeLastRotation[1]) >= 360) {
    setCubeLastRotation([cubeLastRotation[0], cubeLastRotation[1] % 360])
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

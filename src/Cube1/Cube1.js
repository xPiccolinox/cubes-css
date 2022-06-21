import { useState, useEffect } from 'react'
import './Cube1.css'

const Cube1 = () => {
  const [cursorInsideCube, setCursorInsideCube] = useState(false)
  const [cursorGrabbedCube, setCursorGrabbedCube] = useState(false)
  const [cursorGrabPosition, setCursorGrabPosition] = useState([0, 0])
  const [cursorCurrentPosition, setCursorCurrentPosition] = useState([0, 0])

  useEffect(() => {
    document.getElementById('cube').addEventListener('mouseover', () => {
      setCursorInsideCube(true)
    })
    document.getElementById('cube').addEventListener('mouseout', () => {
      setCursorInsideCube(false)
    })
    document.getElementById('cube').addEventListener('mousedown', (e) => {
      setCursorGrabbedCube(true)
      setCursorGrabPosition([e.clientX, e.clientY])
    })
    window.addEventListener('mouseup', () => {
      setCursorGrabbedCube(false)
    })
    document.getElementById('cube').addEventListener('mousemove', (e) => {
      setCursorCurrentPosition([e.clientX, e.clientY])
    })
  }, [])

  if (cursorGrabbedCube == true) {
    document.querySelector('body').style.cursor = 'grabbing'
    document.getElementById('cube').style.transform = `rotateX(-20deg) rotateY(${(cursorGrabPosition[0] + cursorCurrentPosition[0]) / 3}deg)`
  }
  else if (cursorInsideCube == true && cursorGrabbedCube == false) document.querySelector('body').style.cursor = 'grab'
  else document.querySelector('body').style.cursor = 'auto'

  return (
    <div id="cube">
      <div className="cubeSide" />
      <div className="cubeSide" />
      <div className="cubeSide" />
      <div className="cubeSide" />
      <div id="cubeTop" />
      <div id="cubeBottom" />
    </div>
  )
}

export default Cube1
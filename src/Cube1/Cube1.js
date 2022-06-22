import { useState, useEffect } from 'react'
import './Cube1.css'

const Cube1 = (props) => {
  return (
    <div id="cube"
    onMouseOver={props.handleOnMouseOver}
    onMouseOut={props.handleOnMouseOut}
    onMouseDown={props.handleOnMouseDown} >
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
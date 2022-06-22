import { useState, useEffect } from 'react'
import './Cube1.css'

const Cube1 = (props) => {
  return (
    <div id="cube"
    onMouseOver={props.handleOnMouseOver}
    onMouseOut={props.handleOnMouseOut}
    onMouseDown={props.handleOnMouseDown} >
      <div className="cubeSide">
        <div />
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
        <h2>Front</h2>
      </div>
      <div className="cubeSide">
        <div />
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
        <h2>Right</h2>
      </div>
      <div className="cubeSide">
        <div />
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
        <h2>Back</h2>
      </div>
      <div className="cubeSide">
        <div />
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
        <h2>Left</h2>
      </div>
      <div id="cubeTop">
        <div />
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
        <h2>Top</h2>
      </div>
      <div id="cubeBottom">
        <div />
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
        <h2>Bottom</h2>
      </div>
    </div>
  )
}

export default Cube1
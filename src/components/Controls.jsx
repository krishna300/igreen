import React, {useState} from 'react'
import './Controls.css'
//
import robo from '../assets/robo3.png'
import { useDispatch } from 'react-redux'

import {setPlacing} from '../actions/basic.js'
const Controls = () => {
    //
    const dispatch = useDispatch()
    const [rotation, setRotation] = useState(270);
    const [command, setCommand] = useState('')
    const handleRotate = (angle,f) => {
      setCommand(prev => prev+angle+ " ")
      setRotation(angle);
    };

    //
    const handlePlace = () =>{
        setCommand(prev => prev+"PLACE"+ " ")
    }

    const handleNum = (num) => {
        setCommand(prev => prev + num+ " ")
    }

    const handleReport = () => {
        dispatch(setPlacing(command))
    }

  return (
    <div>

        <div className="image-container" style={{ transform: `rotate(${rotation}deg)`, opacity:'0.4' }}>
            <img
            alt="png"
            src={robo}
            width="40px"
            height="40px"
            />  
        </div>
        {/* // */}
        <div>
            <button onClick={() => console.log('North')}>LEFT</button>
            <button onClick={() => console.log('North')}>RIGHT</button>
        </div>
        {/* // */}
        <div>
            <button onClick={handlePlace}>PLACE</button>
            <button onClick={() => console.log('North')}>MOVE</button>
        </div>
        {/* // */}
        <div className="dir-grid-container">
            <button className="dir-button" onClick={() => handleRotate(-90, "N")}>NORTH</button>
            <button className="dir-button" onClick={() => handleRotate(0, "E")}>EAST</button>
            <button className="dir-button" onClick={() => handleRotate(90, "S")}>SOUTH</button>
            <button className="dir-button" onClick={() => handleRotate(180, "W")}>WEST</button>
        </div>

        <div className='key-pad'>
            <button onClick={()=> {handleNum(0)}}>0</button>
            <button onClick={()=> {handleNum(1)}}>1</button>
            <button onClick={()=> {handleNum(2)}}>2</button>
            <button onClick={()=> {handleNum(3)}}>3</button>
            <button onClick={()=> {handleNum(4)}}>4</button>
        </div>
        <button>Clear</button>
        <button onClick={handleReport}>Report</button>

         <h5>{command}</h5>   
    </div>
  )
}

export default Controls
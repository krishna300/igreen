import React, {useEffect, useState} from 'react';
import './Playground.css'; // Import a separate CSS file for styling
import { useSelector } from 'react-redux';
const Playground = () => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  const {xIndex, yIndex,face} = useSelector(state => state)

  useEffect(() => {
    if(xIndex !== null){
      console.log("FROM PLAY ", xIndex, yIndex, currentPosition)

      setCurrentPosition({x:parseInt(xIndex),
        y:parseInt(yIndex)})
    }

  },[xIndex,yIndex,face])


  // Create an array of 25 elements to map over
  const boxes = Array.from({ length: 5 }, (_, rowIndex) =>
    Array.from({ length: 5 }, (_, colIndex) => ({ x: colIndex, y:  4 - rowIndex }))
  ).flat();

  // console.log('LLLLLL', boxes)
  const handleMoveButtonClick = () => {
    const nextIndex = boxes.findIndex(({ x, y }) => x === currentPosition.x && y === currentPosition.y) + 1;

    if (nextIndex < boxes.length) {
      setCurrentPosition(boxes[nextIndex]);
    }
  };

  const handleup = () => {
    const nextIndex = boxes.findIndex(({ x, y }) => x === currentPosition.x && y === currentPosition.y+1)
    
    console.log('NEXT INDEX', nextIndex)
    if (nextIndex < boxes.length && nextIndex>=0) {
      setCurrentPosition(boxes[nextIndex]);
    }
  }
  return (
    <>
    <button onClick={handleMoveButtonClick} style={{height:'20px'}}>Next</button>
    <button onClick={handleup} style={{height:'20px'}}>UP</button>

    <div className="area-grid-container">

      {boxes.map(({ x, y }, index) => (
        <div key={index} className={`area-grid-item `}>
          {/* Display coordinates in each box */}

          <div>  
              <div 
                className={`${x === currentPosition.x && y === currentPosition.y ? 'current-box' : ''}`}
                style={{ transform: `rotate(${face}deg)` }}
              ></div>
            <div>X: {x}</div>
            <div>Y: {y}</div>
          </div>
        </div>
      ))}
    </div>
    </>

  );
};

export default Playground;

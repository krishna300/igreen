import React from 'react'
      
//
import Controls from './components/Controls'
import Playground from './components/Playground'
const App = () => {
  return (
    <div style={{
      display:'flex',
      gap:'20px'
    }}>
      <Playground />
      <div>
        <Controls/>
      </div>
    </div>
  )
}

export default App
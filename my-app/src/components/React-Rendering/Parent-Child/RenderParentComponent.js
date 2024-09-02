import React, { useState } from 'react'
import RenderChildComponent from './RenderChildComponent';

function RenderParentComponent() {
    console.log(`ParentComponent Render`);
    const [count, setCount] = useState(0)
    
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Count-{count}</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
      <RenderChildComponent />
    </div>
  )
}

export default RenderParentComponent

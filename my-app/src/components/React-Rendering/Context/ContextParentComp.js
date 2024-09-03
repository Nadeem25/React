import React, { createContext, useState } from 'react'
import { ChildA, MemoizedChildA } from './ContextChildrenComp';

export const CountContext = createContext();
const CountProvider = CountContext.Provider

function ContextParentComp() {
    console.log(`ContextParentComp Render`);
    const [count, setCount] = useState(0)

    
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Count-{count}</button>
      <CountProvider value={count}>
        <MemoizedChildA/>
      </CountProvider>
    </div>
  )
}

export default ContextParentComp

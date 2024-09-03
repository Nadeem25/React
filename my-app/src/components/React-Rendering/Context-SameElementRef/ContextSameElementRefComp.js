import React, { createContext, useState } from 'react'


export const CountContext = createContext();
const CountProvider = CountContext.Provider

function ContextSameElementRefComp({children}) {
    console.log(`ContextSameElementRefComp Render`);
    const [count, setCount] = useState(0)

    
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Count-{count}</button>
      <CountProvider value={count}>
        {children}
      </CountProvider>
    </div>
  )
}

export default ContextSameElementRefComp

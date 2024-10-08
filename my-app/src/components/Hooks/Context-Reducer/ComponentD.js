import React, { useContext } from 'react'
import { CountContext } from './CounterComp'

function ComponentD() {
    const countContext = useContext(CountContext)
    return (
      <div>
        Component D :-
        <button onClick={() => countContext.countDispatch('increament')}>Increament</button>
        <button onClick={() => countContext.countDispatch('decreament')}>Decreament</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
      </div>
    )
}

export default ComponentD

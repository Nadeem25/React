import React, { useState } from 'react'
import useCustomHook from './useCustomHook'

function CounterOneComp() {
    const initialValue = 0
    const countBy = 10
    const [count, increament, decreament, reset] = useCustomHook(initialValue, countBy)
  return (
    <div>
        Count-{count}
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOneComp

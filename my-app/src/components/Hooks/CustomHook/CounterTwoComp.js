import React, { useState } from 'react'
import useCustomHook from './useCustomHook'

function CounterTwoComp() {
    const initialValue = 1
    const countBy = 1
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

export default CounterTwoComp

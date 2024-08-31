import React, { useReducer } from 'react'

const initialStateValue = 0;

// Step 2. Create reducer function which is the parameter of userReducer function
const reducer = (stateValue, action) => {
    switch(action.type) {
        case 'increament':
            return stateValue + action.value
        case 'decreament':
            return stateValue - action.value
        case 'reset': 
            return initialStateValue
    }
}

function UseReducer() {
    // Step 1. Create use reducer function
    const [count, dispatch] = useReducer(reducer, initialStateValue)
  return (
   
    <div>
    <div> Count :{count}</div>
      {/* Step 3: Use the dispatch method to pass an action */}
      <button onClick={() => dispatch({type:'increament', value: 1})}>Increament</button>
      <button onClick={() => dispatch({type:'decreament', value: 1})}>Decreament</button>
      <button onClick={() => dispatch({type:'reset' })}>Reset</button>
    </div>
  )
}

export default UseReducer

import React from 'react'

function ChildComponent(props) {
  console.log(`Inside Child Component Render()`);
  return (
    <div>
      <button onClick={() => props.greetHandler("Nadeem", "Athar")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent

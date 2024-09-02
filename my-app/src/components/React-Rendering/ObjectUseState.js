import React, { useState } from 'react'

const initialState = {
    fName: 'Bruce',
    lName: 'Wayne'
}
function ObjectUseState() {
    
    const [person, setPerson] = useState(initialState)
    const changeName = () => {
    //    person.fName = 'Clark'
    //    person.lName = 'Kent'
    //    setPerson(person)

       const newPerson = {...person}
       newPerson.fName = 'Clark'
       newPerson.lName = 'Kent'
       setPerson(newPerson)
    }
    console.log(`Inside ObjecctUseState Component`);
    
  return (
    <div>
      <span>{person.fName}</span>
      <span>{person.lName}</span>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default ObjectUseState

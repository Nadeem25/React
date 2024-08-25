import React from 'react'
import Person from './Person'

function ConditionalRendering() {
    const persons = [
        {
            id: 1,
            name: "Mark",
            age: 45
        },
        {
            id:2,
            name: "John",
            age: 40
        }
    ]
    const personList = persons.map((person) => <Person key={person.id} person = {person}/>)
  return (
    <div>
      {
        personList
      }
    </div>
  )
}

export default ConditionalRendering

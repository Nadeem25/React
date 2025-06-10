import React, { useCallback, useState } from 'react'
import TitleComp from './TitleComp'
import CountComp from './CountComp'
import ButtonComp from './ButtonComp'


// UseCallback(): It will return memoized version of the callback function that only changes if one of the dependencies has changes.
// Example: UseCallback hooks will cache the "IncreamantSalay()" and return that if salary not increamented
// Momoization: Store the function result and reuse when same input are provided.
// It is use to optimize perfomance



 // Ager hum useCallback() use nahi karenge toh child component: age and salary (<ButtonComp> and <CountComp>) re-render hoga if we change either age or salary.
 // Because hum jab bhi change karte hai to parent component re-render hota hai and wo yeh dono function (increamentAge() and increamentSalary() ) ka new refenece create karta hai.
 // But jab hum useCallback() hook use karte hai tab wo sirf us functiona ka refeence create karega jiski dependcies change huwi hai.
 
function UseCallbackComp() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(30000)

    const increamentAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const increamentSalary = useCallback(() => {
        setSalary(salary + 5000)
    }, [salary])

  return (
    <div>
      <TitleComp></TitleComp>

      <CountComp text="Age" count={age}></CountComp>
      <ButtonComp handleClick={increamentAge}>Increament Age</ButtonComp>

      <CountComp text="Salary" count={salary}></CountComp>
      <ButtonComp handleClick={increamentSalary}>Increament Salary</ButtonComp>
    </div>
  )
}

export default UseCallbackComp

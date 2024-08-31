import React, { useState } from 'react'

// Rules Of Hook
// 1. Only call Hooks at the Top Level
// Dont call Hooks inside loops, conditions or nested function

// 2. Only Call Hooks from React Functions
// Call them from within React Functional Components and not just any regular javascript function

// Summary of Hooks
// 1. The useState hook let us add state to functional component
// 2. In classes, the state is always an object, but with useState hook the state does not have to be an object
// 3. It return an array with 2 elements
// 4. 1st element is the current value of state and 2nd element is state setter function.
// 5. Always use prevState to update state value
// 6. When dealing with object or arrays always make sure to spread your state variable and then call the setter function


function UseStateHook() {
    // 1. UseState with numbers
    // console.log(`Inside HookCounter Component`);
    // const initialCount = 0
    // const [count, setCount] = useState(initialCount)

    // const increamentByFive = ()=> {
    //     for (let index = 0; index < 5; index++) {
    //         setCount(prevState => prevState + 1)
    //     }
    // }
    // return (
    //     <div>
    //         Count: {count}
    //         <button onClick={() => setCount(prevState => prevState + 1)}>Increament</button>
    //         <button onClick={() => setCount(prevState => prevState - 1)}>Decreament</button>
    //         <button onClick={increamentByFive}>Increament by 5</button>
    //     </div>
    // )

    // 2. UseState with Objects
    // const [name, setName] = useState({FName: '', LName: ''});
    // return (
    //     <div>
    //         <input type='text' value={name.FName} onChange={(event) => setName({...name, FName: event.target.value})}></input>
    //         <input type='text' value={name.LName} onChange={(event) => setName({...name, LName: event.target.value})}></input>
    //         <h2>{JSON.stringify(name)}</h2>
    //     </div>
    // )

    // 3. UseState with Array
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add Items</button>
            Items: {JSON.stringify(items)}
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseStateHook

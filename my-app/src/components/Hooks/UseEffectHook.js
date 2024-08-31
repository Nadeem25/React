// What is UseEffect Hook
// 1. It is close replacement for componentDidMount componentDidUpdate and componentWillUnmount.

// Dependency Array List: It is way to let react know about everything that the effect must watch for changes.
//It is not a way to specify when you want to re-run the effect.

import React, { useState, useEffect } from 'react'

function UseEffectHook() {
    //console.log(`Inside UseEffect Functional Component`);

    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    useEffect(() => {
        console.log(`Inside useEffectHook useEffect method`);
        document.title = `Count : ${count}`
    }, [count])

    return (
        <div>
            <input type='text' value ={name} onChange={event => setName(event.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default UseEffectHook

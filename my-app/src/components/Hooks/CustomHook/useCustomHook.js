// Custome Hook: It is basically javascript function whose name start with "use"
// It can also call other Hook if required

// Why Custome Hook: Share logic - alternative HOC's  and render props

import React, {useState} from 'react'

function useCustomHook(initialValue, countBy) {
    const [count, setCount] = useState(initialValue)

    const increament = () => {
        setCount((prevState) => prevState + countBy)
    }

    const decreament = () => {
        setCount(prevState => prevState - countBy)
    }

    const reset = () => {
        setCount(initialValue)
    }

    return [count, increament, decreament, reset]
}

export default useCustomHook

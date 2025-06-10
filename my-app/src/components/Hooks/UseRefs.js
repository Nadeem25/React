import React, { useRef , useEffect, useState} from 'react'

// UseRef makes possibles to access DOM element.
// useRef gives you a mutable reference that 1. Does not trigger re-renders 2. Can be used to persist values, or access DOM element

function UseRefs() {

    const [time, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(()=> {
        intervalRef.current = setInterval(()=> {
            setTimer(prevTime => prevTime + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
    <div>
      <h3>Timer: {time} </h3>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Time</button>
    </div>
  )


//     const inputRef = useRef(null)
//     useEffect(() => {
//         inputRef.current.focus()
//     }, [])
    
//   return (
//     <div>
//       <input type='text' ref={inputRef}></input>
//     </div>
//   )
}

export default UseRefs

import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        //setCount(prevCount => prevCount + 1)
    }


    useEffect(() => {
        const interval = setInterval(tick, 1000)
        // Below code is the replication of componentWillUnmount() for clean up
        return () => {
            clearInterval(interval)
        }
    }, [])

  return (
    <div>
       Count: {count}
    </div>
  )
}

export default IntervalHookCounter

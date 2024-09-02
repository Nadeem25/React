import React, { useMemo, useRef, useState } from 'react'

function UseMemoComp() {
    const [countByOne, setCountByOne] = useState(0);
    const [countByTwo, setCountByTwo] = useState(0)
    

    const increamentByOne = () => {
        setCountByOne(countByOne + 1)
    }

    const increamentByTwo = () => {
        setCountByTwo(countByTwo + 2)
    }

    // If we dont use useMemo hook then this function will call weather we change countByOne state or countByTwo state
    // If we want that isEven function should get call only when the countByOne state value get change then use UseMemo Hook
    // useMemo(callBack function, dependecy) : if dependency value change then the useMemo callback function will call
    const isEven = useMemo(() => {
        let i = 0
        while( i < 2000000000)  i++
        return countByOne % 2 === 0
    }, [countByOne])

  return (
    <div>
        <div>
            <button onClick={increamentByOne}>Increament By One - {countByOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            <button onClick={increamentByTwo}>Increament By Two - {countByTwo}</button>
        </div>
    </div>
  )
}

export default UseMemoComp

import React, { useContext } from 'react'
import { CountContext } from './ContextParentComp';

function ChildA() {
    console.log(`Context-Memo Child A Render`);
    
    return (
        <div>
            <div>Child A Component</div>
            <ChildB></ChildB>
        </div>
    )
}
export const MemoizedChildA = React.memo(ChildA)

function ChildB() {
    console.log(`Context-Memo Child B Render`);
    return (
        <div>
            <div>Child B Component</div>
            <ChildC></ChildC>
        </div>
    )
}

function ChildC() {
    const count = useContext(CountContext)
    console.log(`Context-Momo Child C Render`);
    return (
        <div>
            <div>Child C Component Count: {count}</div>
        </div>
    )
}



export {
    ChildA
}

import React, { useContext } from 'react'
import { CountContext } from './ContextSameElementRefComp';

function ChildA() {
    console.log(`Context - Same Element Ref Child A Render`);
    
    return (
        <div>
            <div>Child A Component</div>
            <ChildB></ChildB>
        </div>
    )
}


function ChildB() {
    console.log(`Context - Same Element Ref Child B Render`);
    return (
        <div>
            <div>Child B Component</div>
            <ChildC></ChildC>
        </div>
    )
}

function ChildC() {
    const count = useContext(CountContext)
    console.log(`Context - Same Element Ref Child C Render`);
    return (
        <div>
            <div>Child C Component Count: {count}</div>
        </div>
    )
}



export {
    ChildA
}

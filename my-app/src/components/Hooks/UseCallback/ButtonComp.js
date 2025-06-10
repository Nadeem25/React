import React from 'react'

function ButtonComp({ handleClick, children }) {
    console.log(`Rendring Button: ${children}`);

    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(ButtonComp)

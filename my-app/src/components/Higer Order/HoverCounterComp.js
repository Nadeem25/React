import React, { Component } from 'react'
import counter from './Counter'

class HoverCounterComp extends Component {

    render() {
        console.log(`Inside HoverCounterComp`);
        const { count, increamentCount } = this.props
        return (
            <div>
                <h1 onMouseOver={increamentCount}> Hover count: {count}</h1>
            </div>
        )
    }
}

export default counter(HoverCounterComp)

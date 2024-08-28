import React, { Component } from 'react'
import counter from './Counter'

class ClickCounterComp extends Component {
    
    render() {
        const { count, increamentCount } = this.props
        console.log(`Inside ClickCounter`);
        
        return (
            <div>
                <button onClick={increamentCount}> Count {count} times</button>
            </div>
        )
    }
}

export default counter(ClickCounterComp)

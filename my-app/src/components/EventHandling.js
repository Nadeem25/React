// import React from 'react'

// Event Handling with Function and call the clickHandler without brackets
// function EventHandling() {

//     function clickHandler() {
//         console.log(`Event has clicked`);

//     }

//   return (
//     <div>
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }

// export default EventHandling


// Event Handling with Class and call the clickHandler with bracket
import React, { Component } from 'react'

export class EventHandling extends Component {
    clickHandler() {
        console.log(`Event has clicked`);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default EventHandling

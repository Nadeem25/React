import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello!"
        }
        //console.log(`Before Binding:`, this);
        this.clickHandler = this.clickHandler.bind(this)
        //console.log(`after Binding:`, this);
    }

    clickHandler =  () =>{
        this.setState({
            message: "GoodBye!"
        })
        console.log(this);

    }

    render() {
        //console.log(`INside Event Bind Render`);
        
        return (
            <div>
                <h1>Message: {this.state.message}</h1>

                {/* Approach 1: Binding in Render
                Every update to the state will cause the component to re-render which means that every click on button hole JSX will re-render*/}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* Approach 2:  Bind with arrow function*/}
                {/* <button onClick={()=> this.clickHandler()}>Click</button> */}

                {/* Approach 3 (Recommended):  Bind in class constructor: Binding happend once in constructor*/}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/* Approach 4 (Recommended):  Arrow function as class properties*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind

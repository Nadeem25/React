import React, { Component } from "react";

class State extends Component {

    constructor() {
        super()
        //console.log("Inside Class Base State Component");
        this.state = {
            message: "Subscribe To Learn State",
            count: 0
        }
    }

    changeMessage() {
        this.setState({
            message: "You have subscribed"
        })
    }

    increament() {
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=> {
        //     console.log(`Count value: ${this.state.count}`);
        // })

        this.setState((prevState)=> ({
            count: prevState.count+1
        }))
        console.log(`updated value:${this.state.count}`);
        
    }

    // Here we are expecting the output will be 5 but the output is 1.
    // because react make group of multiple setState call into a single update for better performance.
    // If you want to update state based on the previous state we need to pass function as an argument to setState method.
    increamentByFive() {
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()

    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={() => this.changeMessage()}>Subscribe</button>
                </div>
                <div>
                    <h1>Count: {this.state.count}</h1>
                    <button onClick={() => this.increamentByFive()}>Counter</button>
                </div>
            </div>

        )
    }
}

export default State
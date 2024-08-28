import React, { Component } from 'react'

class LifecycleMethodsB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Vishwas"
        }
        console.log(`Inside LifecycleMethodsB constructor()`);

    }

    static getDerivedStateFromProps(props, state) {
        console.log(`Inside LifecycleMethodsB getDerivedStateFromProps()`);
        return null

    }

    componentDidMount() {
        console.log(`Inside LifecycleMethodsB componentDidMount()`);
    }

    shouldComponentUpdate() {
        console.log(`Inside LifecycleMethodsB shouldComponentUpdate()`);
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`Inside LifecycleMethodsB getSnapshotBeforeUpdate()`);
        return null
    }

    componentDidUpdate() {
        console.log(`Inside LifecycleMethodsB componentDidUpdate()`);
    }

    render() {
        console.log(`Inside LifecycleMethodsB render()`);
        return (
            <div>
                LifecycleMethods B Component
            </div>
        )
    }
}

export default LifecycleMethodsB


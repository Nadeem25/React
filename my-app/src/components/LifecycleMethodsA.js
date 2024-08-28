// 1. Mounting: When a instance of component is being created and insert into the DOM
// Methods: Constructor(), static getDerivedStateFromProps(), render() and componentDidMount()

// 2. Updating: When a component is being re-rendered as a result of changes to either its props or state.
// Methods: static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate()

// 3. Unmounting: When a component is being removed from the DOM.
// Methods: componentWillUnmount()

// 4. Error Handling: When there is an error during rendering in a lifecycle method, or in the constructor of any child component.
// Methods: static getDerivedStateFromError() and componentDidCatch()

import React, { Component } from 'react'
import LifecycleMethodsB from './LifecycleMethodsB';

class LifecycleMethodsA extends Component {

  // 1. constructor(): Initialize state and Binding event handlers
  constructor(props) {
    super(props)
    this.state = {
      name: "Vishwas"
    }
    console.log(`Inside LifecycleMethodsA constructor()`);

  }

  // 2. static getDerivedStateFromProps(props, state): When the state of the component depends on changes in props over time.
  static getDerivedStateFromProps(props, state) {
    console.log(`Inside LifecycleMethodsA getDerivedStateFromProps()`);
    return null

  }

  // 4. componentDidMount()
  // --> Invoked immediately after a component and all its children components have been render to the DOM
  // --> Cause side effect. Eg: Interact with DOM or perform any ajax calls to load data.
  componentDidMount() {
    console.log(`Inside LifecycleMethodsA componentDidMount()`);
  }

  // 5. shouldComponentUpdate(nextProps, nextState)
  // --> Performance Optimization
  shouldComponentUpdate() {
    console.log(`Inside LifecycleMethodsA shouldComponentUpdate()`);
    return true
  }

  // 6. getSnapshotBeforeUpdate(prevProps, prevState)
  // --> Called right before changes from the virtual DOM are to be reflected in the DOM.
  // --> Capture some information from DOM.
  // --> Methods will either return null or a value. Returned value will be passed as the third parameter to the  componentDidUpdate() method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`Inside LifecycleMethodsA getSnapshotBeforeUpdate()`);
    return null
  }

  // 7. componentDidUpdate(prevProps, prevState, snapshot)
  // --> called after the render is finished in the re-render cycles
  componentDidUpdate() {
    console.log(`Inside LifecycleMethodsA componentDidUpdate()`);
  }

  // 8. componentWillUnmount(): Method is invoked immidiately before a component is unounted and destroyed
  // -->  For clean-up prupose.
  componentWillUnmount() {

  }

  changeState = () => {
    this.setState({
      name: 'Codevolution'
    })
  }

  // 3. render(): 
  // --> Read props and state and return JSX
  // --> Do not change state or intract with DOM or make ajax calls.
  // --> Childer component lifecucle methods are also executed

  render() {
    console.log(`Inside LifecycleMethodsA render()`);
    return (
      <div>
        LifecycleMethods A Component
        <button onClick={this.changeState}>Change State</button>
        <LifecycleMethodsB />
      </div>
    )
  }
}

export default LifecycleMethodsA


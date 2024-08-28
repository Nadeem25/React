import React from 'react'

const counter = (WrappedComponent) => {
  class Counter extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }

    increamentCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 }
      })
    }

    render() {
      console.log(`Inside Counter Comp: ${this.props.name}`);
      return (<WrappedComponent count={this.state.count} increamentCount={this.increamentCount} />)
    }
  }
  return Counter;
}

// function Counter() {
//   return (
//     <div>
//       <ButtonCounterComp />
//       <HoverCounterComp />
//     </div>
//   )
// }

export default counter

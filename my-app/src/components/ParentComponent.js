import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "parent",
         name: 'Mark'

      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName, parentName) {
        this.setState({
            parentName: parentName
        }, ()=> {
            alert(`Hello ${this.state.parentName} from ${childName}`)
        })
        
    }

    // componentDidMount() {
    //   setInterval(() =>{
    //     this.setState({
    //       name: 'John'
    //     })
    //   }, 2000)
    // }
    
  render() {
    console.log(`Inside Parent Component Render()`);
    return (
      <div>
        {/* Passing function as properties to chile component from parent component */}
        {/* <ChildComponent greetHandler={this.greetParent}/> */}
        <RegularComponent name = {this.state.name}/>
        <PureComp name = {this.state.name}/>
      </div>
    )
  }
}

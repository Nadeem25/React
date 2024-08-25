import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "parent"
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
    
  render() {
    return (
      <div>
        {/* Passing function as properties to chile component from parent component */}
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

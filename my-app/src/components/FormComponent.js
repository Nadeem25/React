import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         topic: 'React'
      }
    }

    handleUsernameChange = (event) => {
        //console.log(`Inside Username Change`, event);
        this.setState({
            username: event.target.value
        })
    }

    handleChangeTopic = (event)=> {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = ()=> {
        alert(`Username: ${this.state.username} and Topic: ${this.state.topic}`)
    }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' values={this.state.username} onChange={this.handleUsernameChange}></input>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleChangeTopic}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

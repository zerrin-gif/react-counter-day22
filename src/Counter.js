import React, { Component } from 'react'
​
export default class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    this.increase = this.increase.bind(this);
  }
  increase(){
    // this.setState({count: 1})
    this.setState({count:this.state.count +1})
  }
  render() {
    return (
      <div className ="card">
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>Click me!</button>
      </div>
    )
  }
}
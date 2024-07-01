import React, { Component } from 'react'

export default class ImpureReactComponent extends Component {
    state={count:0}

    updateCounter=()=>{
        this.setState({count :this.state.count+1})
    }

    updateCounter5=()=>{
        this.setState({count:5})
    }
  render() {
    console.log("Pure Component");
    return (
      <div>
        <h1>Pure Component</h1>
        <h1>count:{this.state.count}</h1>
        <button onClick={this.updateCounter}>Update</button>
        <button onClick={this.updateCounter5}>Update5</button>
      </div>
    )
  }
}


import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor (props) {
  	super(props)
    
    // This binding is necessary to make `this` work in the callback
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
    this.multiply = this.multiply.bind(this)

    this.state = {
      result: 0
	}
  }

  add() {
    let sum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0);

    this.setState({
      result: sum
    })
  }

  subtract() {
    let diff = (parseInt(this.refs.val1.value) || 0) - (parseInt(this.refs.val2.value) || 0);

    this.setState({
      result: diff
    })
  }

  multiply() {
    let product = (parseInt(this.refs.val1.value) || 0) * (parseInt(this.refs.val2.value) || 0);

    this.setState({
      result: product
    })
  }

  render() {
    return (
		<div className="container">
		  <h1>Math with React!</h1>

		  <div className="add">
			<input type="text" ref="val1" />
          	<button onClick={this.add}>+</button>
			<button onClick={this.subtract}>-</button>
          	<button onClick={this.multiply}>*</button>

          	<input type="text" ref="val2" />
          	<span>=</span>
			<h3>{this.state.result}</h3>
		  </div>
		</div>
    );
  }
}

export default Calculator;

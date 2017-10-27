import React, {Component} from 'react';

class Hello extends Component {
  // what should happen when the component is first created
  constructor (props) { 
  	// make call to parent class' (Component) constructor
  	super() // When this class is created, you should still do the default initialization for this class.
  	this.state = { // set an initial state of anything we want
  		moodPoints: 1 // initialize this.state.moodPoints to be 1
  		} 
	}
  // increase moodPoints by 1 in this.state
  increaseMood(e) {
    if (this.state.moodPoints === 10) {
      // at 10, wrap to 1.
      this.setState({
        moodPoints: 1
      })
    } else {
      this.setState({
        moodPoints: this.state.moodPoints + 1
      })
    }
  }

  // what should the component render
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>You are {this.props.age} years old.</p>
        <p>You love: {this.props.animals[0]}</p>
        <p>On a scale of 1-10</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>
      </div>
      )
  }
}

export default Hello
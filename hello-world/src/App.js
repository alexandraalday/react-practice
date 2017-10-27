import React, {Component} from 'react';

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>You are {this.props.age} years old.</p>
        <p>You love: {this.props.animals[0]}</p>
      </div>
      )
  }
}

export default Hello
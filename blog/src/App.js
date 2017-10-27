import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3> by: {this.props.author} </h3>
        <p> {this.props.body} </p>
        <h4> Comments: </h4>
        <p> {this.props.comments[0]}</p>
      </div>
    );
  }
}

export default Post;

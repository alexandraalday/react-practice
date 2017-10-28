import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  changeBody(e) {
    let bodyInput = prompt("What did you want to say?")
    this.setState({
      body: bodyInput
    })
  }
  render() {
    let allAuthors = this.props.authors.map( (author, index) => (
      <Author author={author} key={index} /> ))
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]
    return (
      <div>
        <h1>{this.props.title}</h1>
        {allAuthors}
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.changeBody(e)}>Edit body</button>
        </div>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;

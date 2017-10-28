import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  constructor (props) { // Upon instantiation of your component, the constructor method is called.
    super() // It calls super, which is the base class (React.Component)'s constructor.
    this.state = { // the component's initial state is set
      body: props.body
    }
  }

  changeBody(e) {
    let bodyInput = prompt("What did you want to say?") // using a prompt is gross though
    this.setState({ // called to update the component's state
      body: bodyInput
    })
  }

  changeBodyViaForm(e) {
    this.setState({ //called to update the component's state
      body: e.target.value
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
          <input type="text" onChange={(e) => this.changeBodyViaForm(e)} />
        </div>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;

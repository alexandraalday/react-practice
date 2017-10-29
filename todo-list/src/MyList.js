import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'
import ToDoList from './ToDoList'

class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  clearList (e) {
    console.log("Awww yiss cleared the list!") // sanity check
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    // prevent the event from running the default "submit" event.
    e.preventDefault()
    console.log("Added a new item yo!") // sanity check
    let toDos = this.state.toDoItemArray
    toDos.push(this.state.newItem)
    this.setState({toDoItemArray: toDos, newItem: ''})
  }

  render() {
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          <ToDoList toDoItemArray={this.state.toDoItemArray} />
        </ul>
        <form>
          <input type="text"
           placeholder="Type an item here"
           onChange={(e) => this.newItemChange(e)}
           value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
      
    );
  }
}

export default MyList;
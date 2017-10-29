import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './Home'
import Procedures from './Procedures'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/procedures">Procedures</Link>{' '}
          <Link to="/contact">Contact</Link>
        </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/procedures" component={Procedures} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Blog from './Blog.js';
import Home from './Home.js';
import About from './About.js';
import Movie from './Movie.js';
import Food from './Food.js';
import './App.css';

const post = {
  title: "Baby's first post",
  authors: [
    "Stealthy Stegosaurus",
    "Tiny trex",
    "Iguanadon Ivory"
  ],
  body: "look at me i'm a posting baby!",
  comments: [
    "First!",
    "Great post!",
    "hire him!"
  ]
}

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/blog">My Blog</Link>{' '}
        <Link to="/about">About moi</Link>{' '}
        <Link to="/movie">The best movie</Link>{' '}
        <Link to="/food">Favorite Food</Link>
      </nav>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie" component={Movie}/>
      <Route path="/food" component={Food}/>
      <Route path="/blog" component={
        () => (<Blog title={post.title}
                  allAuthors={post.authors}
                  body={post.body}
                  comments={post.comments} />
        )}/>
    </div>
  </Router>
)

export default App
# notes

## Component Lifecycle

These methods are called at specific points in the rendering process. You can use these methods to perform actions based on what's happening on the DOM.

   - `componentDidMount`, for example, is called immediately after a component is rendered to the DOM.

   - `componentWillUnmount` is called immediately before a component is removed from the DOM.

Some common uses of lifecycle methods are making asynchronous requests, binding event listeners, and optimizing for performance.

React components' life cycle events fall into three broad categories:

   - `Initializing/mounting` (These methods are called when an instance of a component is being created and inserted into the DOM)

   - `Updating` (An update can be caused by changes to props or state. These methods are called when a component is being re-rendered)

   - `Destruction/unmounting` (This method is called when a component is being removed from the DOM)

You don't need to write these methods.

   - They happen automatically, just like constructors did before we explicitly wrote one.

   - You only have to worry about these if you want to change something in them


### Initializing/mounting Methods

Methods include:

   - `constructor()`
        This is sometimes referred to as a combination of `getInitialState()` and `getDefaultProps()`.

   - `componentWillMount()`

   - `componentDidMount()`

   - `render()`

### Updating Methods

Methods include:

   - `componentWillReceiveProps()`

   - `shouldComponentUpdate()`

   - `componentWillUpdate()`

   - `componentDidUpdate()`

   - `render()`
   
 ### Destruction/unmounting

 The method is:
     
   - `componentWillUnmount()`

---

## The constructor() method

This is in the first part of the component lifecycle - `initializing/mounting`.

Like any JavaScript class, the constructor method:

   - Is called when a component is instantiated (when it's first rendered).

   - In a class constructor, you must call super before doing anything else. A React component constructor in its most basic form looks like this:

```
constructor(props) {
  super(props)
}
```
You don't need to define a constructor if that's all it does, however.

   - This happens automatically when your component is invoked.
   - A common use of the constructor is to initialize state using the props passed to the component — as we have been doing!

```
constructor(props) {
  super(props)
  this.state = {
    someproperty: props.someproperty
  }
}
```

Notice that in this constructor, `this.addStuff` is bound to the class here: `this.addStuff = this.addStuff.bind(this)`.

Now, if we pass `this.addStuff` to a child component as an `onChange` callback, it will be bound to `StuffTable` and will update its state when it's invoked.

You don't need a constructor in every React component, but if you need to initialize `state` by `props` or `bind` methods, the constructor is where you do it.

```
class StuffTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stuff: props.stuff
    }
    this.addStuff = this.addStuff.bind(this)
  }

  addStuff(newStuff) {
   this.setState(prevState => ({
      stuff: prevState.stuff.concat(newStuff)
    }))
  }

}
```
---
## The componentWillMount() Method

This is in the first part of the component lifecycle - `initializing/mounting`. This method is called immediately before a component is rendered to the DOM.

`componentWillMount` is usually only needed in advanced use cases such as server rendering.

---

## The componentDidMount() Method

The `componentDidMount` method is called once, immediately after your component is rendered to the DOM. It is in the first part of the component lifecycle - `initializing/mounting`.

If you want to make an AJAX request when your component first renders, do it here (not in the constructor or in `componentWillMount`).

- `componentWillMount` shouldn't be used for server requests because it may be invoked multiple times before the render in future versions of React.

```
componentDidMount() {
  fetch(`http://api.com/${this.props.id}`)
    .then(response => response.json())
    .then(data => this.setState(prevState => ({ data })))
}
```
---

## Methods for Event Listeners

Another common use for `componentDidMount` is to bind event listeners to your component. You can then remove the event listeners in `componentWillUnmount`.

```
class StuffTable extends React.component {

  componentDidMount() {
    document.addEventListener('dragover', this.handleDragStart)
  }

  componentWillUnmount() {
    document.removeEventListener('dragover', this.handleDragStart)
  }

  handleDragStart(e) {
    e.preventDefault()
    this.setState(prevState => ({
      dragging: true
    }))
  }

}
```

---

## The render() method

`render` is the one method that every React class component must have.

   - `render` is called in two parts of the component lifecycle - at the beginning, when the component is being initiated/mounted, and when the component is being updated.

   - In `render`, you return JSX using the component's `props` and `state`.

   - Never set `state` in `render`. `render` should only react to changes in `state` or `props`; it should not create those changes.

---

## The componentWillReceiveProps(newProps) Method

This method is called anytime your component receives new `props`.

  -  It is not called with the initial `props` when your component initially mounts.

  -  If you need to change the state of your component based on changes in the `props`, do it here.

In a simple app, you generally won't need `componentWillReceiveProps`.

---

## The shouldComponentUpdate(), componentWillUpdate(), and componentDidUpdate() Methods

These methods are called when a component's `props` or `state` change.

They are generally used for performance optimizations.

---

## Component Lifecycle Summary

React class components have lifecycle methods that are invoked at certain stages of a component's "life" on the DOM. Some of the lifecycle methods you'll use frequently include:

   - `constructor()`: Initializes state, binds methods.

   - `componentDidMount()`: Makes AJAX requests, gets DOM refs, binds event listeners, sets state if necessary.

   - `componentWillUnmount()`: Unbinds event listeners, performs other clean up.

   - `componentWillReceiveProps()`: Updates state based on changes in components.

   - `render()`: Returns markup/UI.


---
## React Router

React Router is a library that makes it easy for us to route URLs.

   - Instead of routing to different pages, we dynamically load different components on the same page

Here's what React Router provides:

   - Routing: It easily defines what content is associated with what URLs.

   - History: It automatically manages browser history when the user navigates between content.

---

## General syntax for creating routes

Each `<Route>` component has two pieces:

   - `path` - This defines the URL path that leads to the component.

   - `component` - This defines what component users will see when they navigate to the path.

A single route looks like this: `<Route path="/contacts" component={Contact} />`

Import syntax: 

```
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
```

We can wrap `<Link>` tags around whatever text that we want to display to the user to click on. The pieces of this are:

   - `<Link>`: This creates <a> tags and automatically integrates modern HTML5 browser history mechanics for the single-page application. It has one attribute:

   - `to`: This designates what path to navigate to when the user clicks the link.

For example, `<Link to="/procedures">See Our Procedures</Link>`

---
## API Calls

`componentDidMount()` is where we should make API calls. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

The value of the this keyword in JavaScript changes depending on what function is being executed.

   - Its relative value depends on the function that contains it.

   - The `fetch()` call involves many callbacks with several different functions. In order to preserve the initial context of our React component, we need to create a new variable, `base`, to keep track of the original value of the `this` keyword. Saving the original value of this to `base` allows us to access methods like `this.setState()` through `base.setState()` throughout all of the different functions.


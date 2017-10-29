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
     
   -` componentWillUnmount()`




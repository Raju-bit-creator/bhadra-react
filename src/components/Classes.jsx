import React, { Component } from 'react'

export default class Classes extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
        // constructor initialization
    }
    componentDidMount(){
        // component did mount
        this.interval =setInterval(()=>{
            this.setState({count: this.state.count + 1})
        }, 1000)
    }
    // shouldComponentUpdate(){

    // }
    // componentDidUpdate(){

    // }
    // componentWillUnmount(){

    // }
  render() {
    return (
      <div>
        <h1>count :{this.state.count}</h1>
      </div>
    )
  }
}


// In React, components go through a lifecycle that can be divided into three main phases:

// Mounting: This phase is when a component is being inserted into the DOM for the first time.

// constructor(): Initializes the component's state and binds event handlers.
// render(): Returns the JSX that represents the component's UI.
// componentDidMount(): Runs once after the component is mounted in the DOM, often used for API calls or setting up subscriptions.
// Updating: This phase occurs when a component's state or props change, causing it to re-render.

// shouldComponentUpdate(): Controls whether the component should re-render; useful for optimization.
// render(): React re-renders the component with updated data.
// componentDidUpdate(): Runs after re-rendering; commonly used to act on DOM changes or update data.
// Unmounting: This is when a component is removed from the DOM.

// componentWillUnmount(): Called right before the component is destroyed, often used to clean up subscriptions, timers, or any resources.
// Functional Components & Hooks
// In functional components, React hooks like useEffect manage lifecycle events:

// Mount: Code inside useEffect with an empty dependency array [] runs once on mount.
// Update: useEffect runs whenever dependencies change.
// Unmount: Returning a cleanup function in useEffect executes on unmount, cleaning up resources.
// This lifecycle management allows React to efficiently update the UI and handle resource cleanup.

// Explanation
// constructor: Initializes the state.
// componentDidMount: Sets up an interval to update count every second.
// shouldComponentUpdate: Only re-renders if the count is even.
// componentDidUpdate: Logs every update after a re-render.
// componentWillUnmount: Clears the interval on unmount.


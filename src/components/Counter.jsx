
/*simple lifecycle of react app*/
/*import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super()
        this.state={counter:0}

        console.log("printing constructor")
        console.log("--------------------------------------------------------")
        
    }
    componentDidMount() {
        console.log("the component was mounted")
        console.log("--------------------------------------------------------")
    }
    plusOne(){
        this.setState({counter:this.state.counter+1})
    }
  render() {
      console.log("calling the render ")
    return (
      <div>
          <h1>{this.state.counter}</h1>
        <button onClick={() => this.plusOne()}>add one

      </button>
      </div>

    )
  }
getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("calling the updated component")
    console.log("--------------------------------------------------------")
    console.log(prevState)
    return prevState
}
  componentDidUpdate(){
    console.log("the component was updated")
    console.log("--------------------------------------------------------")
  }
}
*/
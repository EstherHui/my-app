import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)//bind the greetParent() method
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)//[``/$ is a features in ES6]simply alert message that will pop out after click button
  }

/*
- include ChilComponent in render which display the button
- execute child component in parent component
- pass the methos itself as a prop to the child component
- create attribute [greetHandler] to the ChldComponent <- passing a reference to the grid parent method as a prop called greetHandelr
- make sure dont add the parentheses
*/
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
//Use rfc to create functional component

// import React from 'react'

// export default function FunctionClick() {

//     function clickHandler(){
//         console.log('Clicked button');
//     }

//   return (
//     <div>
//       <button onClick= {clickHandler}>click</button>
//     </div>
//   )
// }

///////////////////////////////////////////////////////////////////////////////////////////////


//Use rce to create a class component

// import React, { Component } from 'react'

// class FunctionClick extends Component {

//   clickHandler(){
//       console.log('Button Clicked');
//   }

//   render() {
//     return (
//       <div>
//         <button onClick ={this.clickHandler}>Click Me</button>
//       </div>
//     )
//   }
// }
// export default FunctionClick


////////////////////////////////////Binding Event Handlers//////////////////////////////////////////////////////
import React, { Component } from 'react'

class EventBind extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
    // this.clickHandler = this.clickHandler.bind(this)//approach3 :binding in the class constructor[best option]
  }

  // clickHandler() {
  //   console.log(this)
  //   this.setState({message: 'Goodbye'})
  // }

  clickHandler = () => {
    this.setState({message:'Goodbye'})
  }//approach4 : class property as arrow function

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> *//*approach1 :Binding in rander */} 
        {/* <button onClick={() => this.clickHandler()}>Click</button> *//*approach2 :function arrow in render */} 
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
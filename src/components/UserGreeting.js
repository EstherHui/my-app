import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggiedIn : true
      }
    }
    
  render() {
    
    //4th short-circuit operator
    //render something or nothing
    //if true return word, false return nothing
    return this.state.isLoggiedIn && <div>Logged In</div> //left hand is true will return right hand side, is left false right hand side never evaluate




    //3rd use ternary conditional operator
    // the firast line '?' evaluated is the true or false
    // return(
    //     this.state.isLoggiedIn ?
    //     (<div>Logged In</div>)://if true return this
    //     (<div> Without log in </div>)//else (false) return this
    // )

    
    //2nd using element variable, use JS vriables to store element
    //store element to be render then return the element
    // let message
    // if(this.state.isLoggiedIn){
    //     message = <div>Logged In</div>
    // }
    // else {
    //     message = <div>Without Log In</div>
    // }
    // return <div>{message}</div>


    // 1st If...else
    //   if(this.state.isLoggiedIn){
    //       return <div>Logged In</div>
    //   }
    //   else {
    //       return <div>Without Log In</div>
    //   }


    //Ori simple draft
    // return (
    //   <div>
    //     <div>Logged In</div>
    //     <div>WIthout Login in</div>
    //   </div>
    // )
  }
}

export default UserGreeting

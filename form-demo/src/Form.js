import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          username : '' ,
          comment : '', 
          topic : 'happy'//Select Default  
      }
    }

    //the methos as a class properties
    //itself have pass as a parameter to the handler
    //every time the input change the value is capture using event.terget.value
    //assign this capture value back to state property
    handlerUsernameChange = (event) =>{

        this.setState({
            username : event.target.value
        })

    }

    handlerCommentChange = (event) => {
        
        this.setState({
            comment : event.target.value
        })
        
    }

    handlerTopicChange = (event) => {
        
        this.setState({
            topic : event.target.value
        })
        
    }

    handlerSubmit = event =>{
        //use alert to prompt out the data after user click submit button
        alert(` 
        Username : ${this.state.username} 
        Comment : ${this.state.comment} 
        Topic: ${this.state.topic} `)

        event.preventDefault()//prevent refresh after close alert prompt out
    }
    
  render() {

    //make value = x become shorten
    //(previous value = {this.state.username})
    //(after value = {username})
      const {username, comment, topic }= this.state
    return (
    
   //add onSubmit to create the submit action
   <form onSubmit = {this.handlerSubmit}>
    
    {/*Input element */}  
     <div>
     <label>Username : </label><br/>
     <input type='text' value={username} onChange={this.handlerUsernameChange}/>
    </div>

    {/*Text Area */}
    <div>
        <label>Comment : </label><br/>
        <textarea type ='text' value={comment} onChange={this.handlerCommentChange}></textarea>
    </div>
    
    {/*Select Option */}
    <div>
        <label>Topic : </label>
        <select value={topic} onChange={this.handlerTopicChange}>
            <option value ="happy">Happy</option>
            <option value ="happier">Happier</option>
            <option value ="happiness">Happiness</option>
        </select>
        
    </div>

    <br/>
    <button type='submit'>Submit</button>

   </form>
      
    )
  }
}

export default form

import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          username : '' ,
          comment : '', 
          topic : '01'//Select Default  
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
    
  render() {
    return (
   <form>

    {/*Input element */}  
     <div>
     <label>Username : </label><br/>
     <input type='text' value={this.state.username} onChange={this.handlerUsernameChange}/>
    </div>

    {/*Text Area */}
    <div>
        <label>Comment : </label><br/>
        <textarea type ='text' value={this.state.comment} onChange={this.handlerCommentChange}></textarea>
    </div>
    
    {/*Select Option */}
    <div>
        <label>Topic : </label>
        <select value={this.state.topic} onChange={this.handlerTopicChange}>
            <option value ="01">Happy</option>
            <option value ="02">Happier</option>
            <option value ="03">Happiness</option>
        </select>
    </div>

   </form>
      
    )
  }
}

export default form

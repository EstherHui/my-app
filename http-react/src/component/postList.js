import React, { Component } from 'react'
import axios from 'axios'

class postList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts : [], //1. initialiaze the post then control flow to render()
         errorMsg : ''
        }
    }
    
    //3. retrive the data and GET it pass to render()
    componentDidMount(){
        //perfect place for GET request
        axios.get('https://jsonplaceholder.typicode.com/posts')//GET data from the fake DB
        .then(response =>{
            console.log(response);
            this.setState({posts : response.data})
        })
        .catch(error =>{
            console.log(error);
            this.setState({errorMsg : 'Error retreving data' })
        })
    }

  render() {
      const {posts, errorMsg} = this.state

      //2. at the momment the array is blank
      //4. the data is passing and array is filled
    return (
      <div>
        List of Post
        {
            posts.length ?
            posts.map(post =><div key={post.id}>{post.title}</div>):
            null
        }

        {
            errorMsg ?
            <div>{errorMsg}</div> :
            null

        }
      </div>
    )
  }
}

export default postList

import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'GoodBai'
      }
    }

    componentDidMount(){
        setInterval(()  => {
            this.setState({
                name:'GoodBai'
            })
        },2000)
    }
    
  render() {
    return (
      <div>
          Parent COmponent
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp

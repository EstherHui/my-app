import React from 'react'

//passing the reference as a props from ParentComponent (call methos from ParentComponent as props to the childComponent)
const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
  //use arrow function syntax to pass the parameter
}

export default ChildComponent
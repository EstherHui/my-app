//2nd Styling React Component - Inline Styling
import React from 'react'

const styleHeading = {

    fontSize : '108px',
    color : 'skyblue'

}

function Inline() {
  return (
    <div>
     <h2 className='error'>Error</h2>
     <h1 style={styleHeading}>Inline Styling</h1>
    </div>
  )
}

export default Inline

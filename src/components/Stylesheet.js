//1st Styling React Component - CSS Stylesheet
import React from 'react'
import './myStyle.css'
//also can pasing 'primary' as a props

function Stylesheet(props) {
    const className = props.primary ? 'primary':''//is props return true primary class called
    const size = props.font_xl ? 'font-xl':''//return for font_xl
  return (
    <div>
      <h1 class ={`${className} ${size}`}>StyleSheet</h1>
    </div>
  )
}

export default Stylesheet



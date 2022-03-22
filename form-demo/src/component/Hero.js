import React from 'react'

function Hero({heroName}) {
    if (heroName === 'Joker'){
        throw new Error('This not a hero!!!')
    } 
  return (
    <h2>
      {heroName} Hello
    </h2>
  )
}

export default Hero

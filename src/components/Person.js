import React from 'react'

function Person({person}) {
  return (
    <div>
      <h3>
          Intro : name {person.name},age {person.age}, skill {person.skill}
        </h3>
    </div>
  )
}

export default Person

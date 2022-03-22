import React from 'react'
import Person  from './Person'

function NameList() {

    const names=[ 'Beauty', 'GoodBai','Estehr','Beauty']
    const persons =[{

        id :1,
        name:'Beauty',
        age:'18',
        skill:'Piano',
     },
     {
        id : 2,
        name : 'GoodBai',
        age : '29',
        skill : 'Handsome',
     },
     {
         id : 3,
         name : 'Esther',
         age : '26',
         skill : 'Beautiful',
     }]
//Use index as a key
const nameList = names.map((name,index) => <h2 key = {index}>{index} {name} </h2>)
return <div>{nameList}</div>
////////////////////with key in the map method///////////////////////
    // const personList = persons.map(person =><Person key={person.id} person={person}/>)
    // return <div>{personList}</div>

////////////////The first approach which can display but still not completely no key added////////////

//     const personList = persons.map(person => <Person person={person}/>)
//  //include Person.js in this componanet and passing the variable as a prop
//   return (
//       //use the syntax x.map(), mao method taking a function as a parameter
//     <div>
//       {personList}
//     </div>
//   )
}

export default NameList

type personProps = {

    //name contain object
    name : {

        first : string //declare the type of first name and last
        last : string 

    }

}

export const Person = (person : personProps) => {
// build the arrange of name display
    return (
        <div>
            <h2>
            {person.name.first} {person.name.last} 
            </h2>
        </div>
    )

}
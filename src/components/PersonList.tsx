type PersonListProps = {

    names : {
        first : string,
        last : string,
    }[]//used for array
}

export const PersonList = (list : PersonListProps) => {
//use map to access to each name object of the array
    return (
        <div>
            {list.names.map(names =>{
                return (
                    <h2 key = {names.first}>
                        {names.first} {names.last}
                    </h2>
                )
            })}
        </div>
    )

}
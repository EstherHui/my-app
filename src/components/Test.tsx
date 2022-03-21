type props ={

    name : string

}

export const Test = (props : props) => {

    return(

        <div>
        <h1>Hello {props.name}</h1>
        </div>

    )

}
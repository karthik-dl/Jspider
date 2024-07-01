import React from "react";
import PT from "prop-types"

export default function Workerp (props){
    console.log(props.name);
    console.log(props.id);

    let lowerCaseName = props.name.toLowerCase()
    return(
        <div>
            <h1>Name:{lowerCaseName}</h1>
            <img src={props.imgUrl} alt="no image" height="100" width="100" />
            <h6>Age:{props.age}</h6>
            <h2>{props.children}</h2>
        </div>

    )
}
Workerp.defaultProps={
    name:"John Doe",
    id:123,
    age:"No age",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8j1phplfUkt-F1EAB3ieH1liY7MD_GvOg3Q&usqp=CAU"
}

// propstypes
Workerp.propTypes={
    name:PT.string,
    age:PT.number,
    imgUrl:PT.string
}
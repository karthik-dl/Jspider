const Child = ({ props, fruit }) => {
    console.log(props);
    const [a, a2] = fruit;


    // const {name,age,course,address}=object;
    // const {state,district}=address;

    return (
        <div>
            {/* <h1>Hello {props.userName}</h1>
        <h2>Name:{props.object.name}</h2>
        <h2>Age:{props.object.age}</h2>
        <h2>course :{props.object.course}</h2> */}
             <h1>{props.userName}</h1>
            <h1>{props.object.name}</h1>
            <h1>{props.object.age}</h1>
            <h1>{props.object.course}</h1>
            <h1>{props.object.address.state}</h1>
            <h1>{props.object.address.district}</h1>
            {a}
            
            {a2}


        </div>

    )
}
export default Child;
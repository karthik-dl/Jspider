// const Conditionalrendering = () => {
    
//     const age=19;
    // let message;
    // if(age>18){
    //     message="You are eligble to voting"
    // }else{
    //     message="You are not eligble to voting"
    // }
    // return (
    //     <div>
    //         <h1>{message}</h1>
    //     </div>
    // )
    // ......Ternary operator
    // let message=age>=18? "eligible": "not eligible";
    // return (
    //     <h1>{message}</h1>
    // )
// .................
//     return <h2>{age>=17 ? "":""}</h2>
// }
// export default Conditionalrendering

// const render =()=>{
//     const age=18;
//     let message;
//     if(age>18){
//         message="Eligible";
//     }
//     else{
//         message="Not elligible"
//     }
//     return (
//         <h1>{message}</h1>
//     )
// }
// export default render;

const WebPage =()=>{
    const age=18;
    let display;
    if(age>=18){
        display="Eligible for login"
    }
    else{
        display="not elligible"
    }
    return(
        <h1>{display}</h1>
    )
}
export default WebPage
// import { useState } from "react";
// import { useState } from 'react';

// const FirstHook = () => {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         setCount(count +1)

//     }
//     const clickToDecrease = ()=>{
//         setCount(count - 1)
//     }
//     const clickToReset = ()=>{
//         setCount(0)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleClick}>Increase</button><br>
//             </br>
//             <br></br>
//             <button onClick={clickToDecrease}>Decrease</button><br>
//             </br>
//             <br></br>
//             <button onClick={clickToReset}>Reset</button>
//         </div>
//     )
// }
// export default FirstHook

import {useState} from "react";

const FirstHook =()=>{
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count +1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default FirstHook

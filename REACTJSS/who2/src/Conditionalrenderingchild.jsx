// import React from 'react'

// const Conditionalrenderingchild = (props) => {

//     if(props.isAuth.isLogged){
//   return ( <>
//         <div>
//             <h1>Hi man Welcome to this website</h1>
//             <ul>
//                 <li>
//                     <a href='#'>Home</a>
//                 </li>
//                 <li>
//                     <a href='#'>logout</a>
//                 </li>
//             </ul>
//         </div>
//     </>)
// }
// else {
//     return(<>
//     <div>
//         <h1>Now please Login</h1>
//         <ul>
//             <li>
//                 <a href='#'>Login</a>
//             </li>
//             <li>
//                 <a href='#'>Signup</a>
//             </li>
//         </ul>
//     </div>
//     </>)
// }
// }

// export default Conditionalrenderingchild
// !=====================================================================================

// & By using ternary Operator
// import React from 'react'
// import Homec from './Homec'
// import Careerc from './Careerc'
// import "./Global.css"

// const Conditionalrenderingchild = (props) => {
//   return (
//     <div>
//         {props.isAuth.isLogged ? <Homec/>:<Careerc/>}
//     </div>
//   )
// }

// export default Conditionalrenderingchild

// !==================================================================================

import React, { useState } from 'react'
import Homec from './Homec'
import Careerc from './Careerc'

const Conditionalrenderingchild = () => {
    let[isLogged,setLogged]=useState(true)

    let HandleChange=()=>{
        setLogged(false)
    }
    let HandleChange1=()=>{
        setLogged(true)
    }
  return (
    <div>{isLogged ? (<>
        <div>
        <h1>Welcome man...</h1>
        <div><Homec/></div>
        </div>
        <button onClick={HandleChange}>Next</button>

    </>):(<>
        <h1>Hello cute boyyy</h1>
        <div><Careerc/></div>
        <button onClick={HandleChange1}>Previous</button>
    </>)
    }
    </div>
  )
}

export default Conditionalrenderingchild
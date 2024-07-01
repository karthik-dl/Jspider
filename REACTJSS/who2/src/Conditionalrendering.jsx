// import React, { useState } from 'react'
// import Conditionalrenderingchild from './Conditionalrenderingchild'

// const Conditionalrendering = () => {
//     let [isLogged,setLogged]=useState(true)
//   return (
//     <div>
//         <Conditionalrenderingchild  isAuth={{isLogged,setLogged}}/>
//     </div>
//   )
// }

// export default Conditionalrendering
// !======================================================

// & b y using ternary operator
import React, { useState } from 'react'
import Conditionalrenderingchild from './Conditionalrenderingchild'
import "./Global.css"


const Conditionalrendering = () => {
    let [isLogged,setLogged] = useState(false)
      return (
    <div><Conditionalrenderingchild isAuth={{isLogged,setLogged}}/></div>
  )
}

export default Conditionalrendering

// !==========================================================

// import React from 'react'

// const Conditionalrendering = () => {
//   return (
//     <div>Conditionalrendering</div>
//   )
// }

// export default Conditionalrendering
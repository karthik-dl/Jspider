// // &How many ways we can destructed the data
// // & 1
// // import React from 'react'

// // const Childprops = (props) => {
// //   return (
// //     <div>
// //         <h1>{props.name}</h1>
// //         <h1>{props.subject}</h1>
// //     </div>
// //   )
// // }

// // export default Childprops

// // .................................

// // &2
// // import React from 'react'

// // const Childprops = (props) => {
// //     let{name,subject}=props
// //   return (
// //     <div>
// //         <h1>{name}</h1>
// //         <h1>{subject}</h1>
// //     </div>
// //   )
// // }

// // export default Childprops

// // ..............................

// // // &3

// // import React from 'react'

// // const Childprops = ({name,subject}) => {
// //   return (
// //     <div>
// //         <h1>{name}</h1>
// //         <h1>{subject}</h1>
// //     </div>
// //   )
// // }

// // export default Childprops

// // ......................................................

// // import React from 'react'

// // const Childprops = (props) => {
// //   let{userName,Com_id,Languages,Course}=props

// //   return (
// //     <div>
// //       <h1>{userName}</h1>
// //       <h1>{Com_id}</h1>
// //       <h1>{Languages}</h1>
// //       <h1>{Course}</h1>
// //     </div>
// //   )
// // }

// // export default Childprops

// // ......................................................

// import React from 'react'

// const Childprops = (props) => {
//   let {userName,Salary,Com_id,Languages,Course}=props
//   return (
//     <section>
//       <article>
//         <h1>{userName}</h1>
//         <h1>{Salary}</h1>
//         <h1>{Com_id}</h1>
//         <h1>{Languages}</h1>
//         <h1>{Course}</h1>
//       </article>
//     </section>
//   )
// }

// export default Childprops
// ......................

// import React from 'react'

// function Childprops(props) {
//   return (
//     <div><h1>{props.changeName("cuteboy")}</h1>
//     <h1>{props.state.Course}</h1>
//     <section>
//       <article>
//         {props.PRODUCT.map((m)=>{
//           console.log(m);
//           return ( <>
//           <h1>{m.Id}</h1>
//           </>)
//         })}
//       </article>
//     </section>
    
//     </div>
//   )
// }

// export default Childprops

// ........................................

// import React from 'react'

// const Childprops = ({Increment,Decrement,Reset}) => {
//   return (
//     <div>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Decrement}>Decrement</button>
//       <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }

// export default Childprops

// !................................................................

// & Propes Types

// import React from 'react'
// import {PropTypes} from 'prop-types'

// const Childprops = () => {
//   return (
//     <div>Childprops</div>
//   )
// }

// export default Childprops
// Childprops.propTypes={
//   usename: PropTypes.string,
//   id: PropTypes.object,
//   yes:PropTypes.bool
// }


// !................................

import React from 'react'
import Footer from './Components/Footer/Footer'

const Childprops = () => {
  return (
    <div><Footer/></div>
  )
}

export default Childprops

// !1

// import React from 'react'


// const Value = ({value,Addvalue}) => {
//   return (
//     <div>
//         <h1>{value}</h1>
//         <button onClick={Addvalue}>AddValue</button>
//         </div>
//   )
// }

// export default Value

// !.....................................

import React,{ memo } from 'react'

const Value = ({value,Addvalue}) => {
    console.log("Adding values");
  return (
    <div>
        {value.map((element,key)=>{
            (<>
            <h1>{element}</h1>
            </>)
             })}
            <button onClick={Addvalue}>addvalue</button>
       
    </div>
  )
}

export default memo(Value)
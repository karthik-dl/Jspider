// !widow fetching using window .fetch method
// import React, { useEffect, useState } from 'react'

// const Apifetching = () => {
//     let [data, setdata] = useState([])
//     let fetchApi = () => {
//         let data = window.fetch("http://api.github.com/users")
//         console.log(data);
//         data.then((m) => {
//             console.log(m);

//             let finaldata = m.json()
//             console.log(finaldata)
//             finaldata.then((mesg) => {
//                 console.log(mesg);
//                 setdata(mesg)
//             })
//         })
//     }
//     useEffect(() => {
//         fetchApi()
//     }, [])

//     return (
//         <div>{data.map((m) => {
//             console.log(m);
//             return (<>
//                 <h1>{m.login}</h1>
//             </>)
//         })}</div>
//     )
// }

// export default Apifetching

// ?....................................................................................................

// !by using async await

// import React, { useEffect, useState } from 'react'

// const Apifetching = () => {
//     let [data, setData] = useState([])
//     async function demo(){
//         let data=await fetch("http://api.github.com/users")
//         console.log(data);
//         let finaldata=await data.json()
//         setData(finaldata)
//     }
//     useEffect(()=>{
//         demo();
//     },[])
//   return (
//     <div>
//         {data.map((m)=>{
//             return(
//                 <>
//                 <h1>{m.login}</h1>
//                 <img src={m.avatar_url} alt={m.avatar_url}/>
//                 </>
//             )
//         })}
//     </div>
//   )
// }

// export default Apifetching

// ?..........................................................

// &by using axios

import React, { useEffect, useState } from "react"
import axios from "axios"

import "./Global.css"

// const Apifetching = () => {
//     let [data, setdata] = useState([])
//     let url = "https://api.github.com/users"
//     let fecthApi = () => {
//         return axios.get(url).then((mesg) => {
//             console.log(mesg);
//             setdata(mesg.data)
//         })
//     }
//     useEffect(() => {
//         fecthApi()
//     }, [])
//     return (
//         <div>
//             {data.map((m) => {
//                 console.log(m);
//                 return (<>
//                 <div className="container">
//                     <div className="main">
//                     <img src={m.avatar_url} alt={m.avatar_url}/>
//                         <h1>Login:{m.login}</h1>
//                         <h1>Id:{m.id}</h1>
//                         <h1>URL:{m.url}</h1>
//                     </div>
//                     </div>
//                 </>)
//             })}
//         </div>
//     )
// }

// export default Apifetching

// ?..........................................


// !fetch the data using xhr method

// import React, { useEffect, useState } from 'react'

const Apifetching = () => {
    let [data,setData]=useState([])
    function fetchApi(){
    let xhr=new XMLHttpRequest();
    console.log(xhr);
    xhr.open("GET","http://api.github.com/users")
    xhr.onload=function(){
        console.log(xhr);
        let data=JSON.parse(xhr.response)
        console.log(data);
        data.map((msg)=>{
            console.log(msg.id);
        })
    }
    xhr.send()
}
    useEffect(()=>{
        fetchApi()
    },[])
  return (
    <div>
        {data.map((m)=>{
            return(<>
            <h1>{m.login}</h1>
            <h1>{m.id}</h1>
            </>)
        })}
    </div>
  )
}

export default Apifetching
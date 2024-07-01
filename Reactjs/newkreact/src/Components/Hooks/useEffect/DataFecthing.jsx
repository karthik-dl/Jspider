import React, { useEffect, useState } from 'react'
import axios from "axios"

const DataFecthing = () => {
    let [worker,setWorker]= useState([])

    useEffect(()=>{
        async  function dataFetch() {
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(response.data)
            setWorker(response.data)
        }
        dataFetch();
    },[])
  return (
    <div>
        {worker.map((m)=>{
            return(
                <li key={m.id}>
                   <h1>{m.title}</h1>
                </li>
            )
        })}

    </div>
  )
}

export default DataFecthing
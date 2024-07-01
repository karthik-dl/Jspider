import React, { useEffect, useState } from 'react'


// !fetching the data using dot then and dot catch method
const GitApiData = () => {

    let [user,setUser] = useState([])
    useEffect(()=>{

        let gitUser =fetch("https://api.github.com/users")
        gitUser.then((res)=>{
            return res.json()
        })
        .then((apidata)=>{
            setUser(apidata)
        })

    },[])


  return (
    <div>
        {user.map(({id,avatar_url})=>{
            return (
                <li key={id}>
                    <img src={avatar_url} alt=""/>
                </li>
            )
        })}
    </div>
  )
}

export default GitApiData
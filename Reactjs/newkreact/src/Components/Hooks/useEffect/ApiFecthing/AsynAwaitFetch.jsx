import React from 'react'
import { useState ,useEffect} from 'react'

const AsynAwaitFetch = () => {

    let [user,setUser] = useState([])
    useEffect(()=>{
        async function fetchData(){
            let gitUser = await fetch("https://api.github.com/users")
            gitUser =await gitUser.json()
            console.log(gitUser);
            setUser(gitUser)
        }
        fetchData()

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

export default AsynAwaitFetch
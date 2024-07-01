import React, { useEffect, useState } from 'react';
import axios from "axios"
import Loader from './Loader';

const GitHubUser = () => {
    let [users,setUsers] = useState([])
    // let [isLoading,setIsLoading]=useState(true)
    // let [isError,setIsError] = useState(false)

    useEffect (()=>
    {
        GitUserData()
    },[])

    async function GitUserData ()
    {
        try{
            let {data} = await axios.get("https://api.github.com/users")
            setUsers(data)
            // setIsLoading(true)
            // setIsError(false)
        }
        catch(err){
            // setIsError(true)
            // setIsLoading(false)
            setUsers(err)
        }
    }
  return (
    <div>
        <div>
            {/* <h1>{isLoading && <Loader/>}</h1> */}
            {/* <h1>{isError && "Error"}</h1> */}
        </div>
        
        <div>
        <ul>
            {users.map(({id,avatar_url})=>{
                return <li key={id}>
                    <img src={avatar_url} alt="" height={"200px"}/>
                </li>
            })}
        </ul>
        </div>
        
    </div>
  )
}

export default GitHubUser
import React,{useState} from 'react'

const StateAsynchronous = () => {
    let [count, setCount] = useState(0)
    let updateCounter = () => {
      //!state updated only once
    //   setCount(count + 1)
    //   setCount(count + 1)
    //   setCount(count + 1)
    //   setCount(count + 1)

    // setCount((previousState)=>{
    //     return previousState+1;
    // })
    // setCount((previousState)=>{
    //     return previousState+1;
    // })
    // setCount((previousState)=>{
    //     return previousState+1;
    // })
    // setCount((previousState)=>{
    //     return previousState+1;
    // })
    // setCount((previousState)=>{
    //     return previousState+1;
    // })

    // for(let i=1;i<=5;i++)
    // {
    //     setCount((previousState)=>{
    //         return previousState+1
    //     })
    // }
    // }

    // !.......................................................................
    console.log("Start");
    setCount((ps)=>{
        console.log("Setstate");
        return ps+1
    })
    console.log("end");
}


  return (
    <div><h1>Counter:{count}</h1>
    <button onClick={updateCounter}>+</button></div>
  )
}

export default StateAsynchronous
import React from 'react'

const EventHandling = () => {
    // let getData = ()=>{
    //     console.log("Fetching Data");
    //     return ("Hello")
    // }

    // let getData =(e)=>{
    //     console.log(e.target);  //!Tag from the where event called
    //     console.log(e.type)    //!type of the event
    // }

    let colors = ['red','green','yellow','blue']

    let getIndex = (i)=>{
        console.log(i)
    }
  return (
    <div>
        {/* <button onClick={getData}>Click</button> */}
        {/* <button onClick={()=>{
            console.log("Arrow function")
        }}>Submit</button> */}

        <ol style={{margin:"50px"}}>
            {colors.map((color,index)=>{
                return(
                    <li key={index}>{color}
                    <button onClick={()=>{
                        getIndex(index)
                    }}>Get Index </button></li>
                )
            })}
        </ol>
    </div>
  )
}

export default EventHandling
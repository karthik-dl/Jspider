import React from 'react';
import { useState } from 'react'
import { MyContext } from './MyContext'
import MyComponent from './MyComponent'

const Child = () => {
  let [Text, setText] = useState(" ")
  let [state, setState] = useState(" ")

  return (
    <div>
      <MyContext.Provider value={{ Text, setText }}>
        <MyComponent />
      </MyContext.Provider>

      {/* <MyContext.Provider value={{state,setState}}>
            <MyComponent/>
         </MyContext.Provider> */}
    </div>
  )
}

export default Child
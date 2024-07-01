import React from 'react'

const ChildOneMemoization = () => {
    console.log("child rendered")
  return (
    <div>ChildOneMemoization</div>
  )
}

export default React.memo(ChildOneMemoization)
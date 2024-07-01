import React from 'react'

const Datalist = ({data}) => {
  return (
    <div>

<div>
      {data.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
    </div>
  )
}

export default Datalist
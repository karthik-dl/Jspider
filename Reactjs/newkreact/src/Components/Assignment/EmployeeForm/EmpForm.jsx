import React, { useState } from 'react'

const EmpForm = ({addData}) => {

    const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(input);
    setInput('');
  };
  return (
    <div>


<form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter data "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>

    </div>
  )
}

export default EmpForm
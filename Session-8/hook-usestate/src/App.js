import React, { useState } from 'react';

function InputName() {

  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Name Input</h1>
      <p>Hi, {name ? name : 'Stranger'} </p>
      <input
        type="text"
        placeholder=" Please Enter your Name"
        value={name}
        onChange={handleNameChange}
      />
      <h1>Headings</h1>
      <p>ParaGraphs</p>
      <h2>Others</h2>
  
    </div>
  );
}

export default InputName;

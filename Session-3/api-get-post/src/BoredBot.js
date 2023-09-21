import React, { useState } from 'react';
import './index.css';

const BoredBot = () => {
  const [idea, setIdea] = useState('');
  const [isFun, setIsFun] = useState(false);

  const getIdea = () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(res => res.json())
      .then(data => {
        setIdea(data.activity);
        setIsFun(true);
      });
  };

  return (
    <div className={`App ${isFun ? 'fun' : ''}`}>
      <h1>🤖 Bored Bot 🤖</h1>
      <h4 id="idea">Find something to do</h4>
      <button id="bored-bot" onClick={getIdea}>Click Here</button>
    </div>
  );
};

export default BoredBot;

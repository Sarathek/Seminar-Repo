import React from 'react';
import './App.css';
import Button from './button';



function App() {
  return (
    <div className="App">
        <h1>Styled Components Example</h1>
        <Button onClick={() => alert('Button clicked')}>Click Me</Button>
    </div>
  );
}

export default App;

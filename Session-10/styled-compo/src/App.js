import React from 'react';
import './App.css';
import Button from './Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Styled Components Example</h1>
        <Button onClick={() => alert('Button clicked')}>Click Me</Button>
      </header>
    </div>
  );
}

export default App;

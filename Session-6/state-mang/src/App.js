import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <TodoList todos={todos} onAddTodo={addTodo} />
    </div>
  );
}

export default App;

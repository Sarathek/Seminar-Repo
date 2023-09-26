import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos, onAddTodo } = props;

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} />
        ))}
      </ul>
      <button onClick={() => onAddTodo('New Task')}>Add Todo</button>
    </div>
  );
}

export default TodoList;

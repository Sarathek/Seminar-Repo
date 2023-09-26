import React from 'react';

function TodoItem(props) {
  const { text } = props;

  return (
    <li>{text}</li>
  );
}

export default TodoItem;

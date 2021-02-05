import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from '../components/TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos)

  return (
    <div>
      {todos.length > 0 ? <h1>Tasks <em>({todos.length})</em></h1> : <h1>No tasks</h1>}
      {todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div> 
  );
};

 
export default TodoList;
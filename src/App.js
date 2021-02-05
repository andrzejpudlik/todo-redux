import React from 'react';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';

import './App.css';

function App() {
  return (
    <div className='todo-app'>
      <h1>What's the Plan for Today?</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;

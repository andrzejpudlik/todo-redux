import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { addTodo } from '../data/actions/todo.action';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.length < 5 || /^\s*$/.test(text)) {
      return;
    } else {
      dispatch(addTodo({
        id: uuid(),
        name: text
      }));
      setText('');
    }
  }

  const handleChange = e => {
    setText(e.target.value);
  }

  return (
    <div className='form'>
      <input
        className='todo-input' 
        type="text" 
        value={text} 
        onChange={handleChange} 
      />
      <button 
        className='todo-button' 
        onClick={handleSubmit} 
      >
        Add Todo
      </button>
      <div class="form-message"></div>
    </div>
  );
};


export default AddTodo;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../data/actions/todo.action';

const TodoItem = ({ todo }) => {

  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();

  const handleChange = e => {
    setName(e.target.value);
  }

  const handleEdit = () => {   
    dispatch(updateTodo({
      ...todo,
      name
    }));
    if (editable) {
      setName(name);
    }
    setEditable(!editable);
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }


  return (
    <div className='todo-row'>
      { editable ? ( 
        <div className='todo-editable'>
            <input
                value={name}
                onChange={handleChange}
                className='todo-input edit'
            />
            <button onClick={handleEdit} className='todo-button editable'>
                Update
            </button>
        </div>
      ) : (
        <>
          <div className='todo'>{todo.name}</div>
          <div className='todo-nav'>
            <button onClick={handleEdit} className='todo-button edit'>
              Edit
            </button>
            <button onClick={handleDelete} className='todo-button delete'>
              Delete
            </button>
          </div>
        </>
      )}
    </div>    
  );
}
 
export default TodoItem;




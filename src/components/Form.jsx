import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import TodoModel from '../model/TodoModel';
import { addItem } from '../actions';
import './Form.css';

function Form() {
  const dispatch = useDispatch();

  const [title, updateTitle] = useState('');
  const [description, updateDescription] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if(!title) {
      return;
    }
    const id = v4();
    const newTodo = new TodoModel(id, title, description, false);
    dispatch(addItem(newTodo));
    updateTitle('');
    updateDescription('');
  };

  return (    
    <section className="form">
      <form onSubmit={submit}>
        <label id="title" htmlFor="title">Title</label>
        <br/>
        
        <input
          className="form--title"
          id="txtTodoItemToAdd"
          type="text"
          name="title"
          value={title}
          onChange={e => updateTitle(e.target.value)} /> 
        <br/>  

        <label id="description" htmlFor="description">Description</label>
        <br />

        <input
          className="form--description"
          type="text"
          name="description"
          value={description}
          onChange={e => updateDescription(e.target.value)} />
        <br/>   

        <input className="form__addButton" type="submit" id="btnAddTodo" value="AddTodo" />
      </form>
    </section>
  );
}

export default Form;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import toDoListReducer from './reducers';
import LocalStorageMiddleWare from './middleware/LocalStorageMiddleWare';
import App from './App';
import './index.css';

const store = createStore(
  toDoListReducer, 
  localStorage.getItem('todos') ? {todos: JSON.parse(localStorage.getItem('todos'))} : {todos : []}, 
  applyMiddleware(LocalStorageMiddleWare)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App className="App"/>
  </Provider>,
);

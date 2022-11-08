import './App.css';
import React  from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';

function App() {
  return (
    <main className="App">
      <header>        
        <h1 className="App__headline"> TODO APP </h1>     
      </header>
      <Form />
      <TodoList/>
    </main>
  );
}

export default App;

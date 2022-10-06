import './TodoList.css';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function TodoList() {
  const todos = useSelector(state => state.todos);
  
  const doneTodos =  todos
    .filter(todo => todo.done )
    .map(todo => <Todo key = {todo.id} todo = { todo }/>)
        
  const notDoneTodos =  todos
    .filter(todo => !todo.done )
    .map(todo => <Todo key = {todo.id} todo = { todo }/>)

return (
  <section className="todoList" id="todoList">
    {notDoneTodos}
    {doneTodos}
  </section>
  );
}

export default TodoList;

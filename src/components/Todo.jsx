import './Todo.css';
import { useDispatch } from 'react-redux';
import { toggleItem, removeItem } from '../actions'

function Todo(props) {
  
  const dispatch = useDispatch();
  const todo = props.todo;
  
  return (
    <section className={todo.done ? `todo--completed` : `todo--pending`}>
      <article className = "todo--toggle-completed" onClick = {() => {
        dispatch(toggleItem(todo.id))
      }}>
        <h2 className="todo--toggle-completed--title">{todo.title}</h2> 
        <p className="todo--toggle-completed--description">{todo.description}</p>
        
      </article>
        {todo.done && <button className="todo__button--remove" onClick = {()=> dispatch(removeItem(todo.id))}>Delete Todo</button>}
    </section>
  );

}

export default Todo;

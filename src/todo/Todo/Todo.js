import './Todo.scss';
import { connect } from 'react-redux';
var classNames = require('classnames');

const Todo = ({todos, index, todo, removeTodo, markCompleted})  => {

  const removeItem = () => {
    removeTodo(todo.task);
  }

  const markCompletedFn = () => {
    markCompleted(todo.task);
  }

  return (
    <div className="task">
      <span>{todos.length}-</span>
      <div className="index">{index+1}</div>
      <div
        title={todo.task}
        className={todo.isCompleted ? 'desc strike-through' : 'desc'}>
        {todo.task}
      </div>
      <i 
        className="fas fa-check-circle" 
        style={ {fontSize: 20} }
        onClick={markCompletedFn}></i>
      <i 
        className="fas fa-trash-alt" 
        style={ {fontSize: 20} }
        onClick={removeItem}></i>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state.todoReducer.todos)
  return {
    todos: state.todoReducer.todos
  }
}

export default connect(mapStateToProps)(Todo);

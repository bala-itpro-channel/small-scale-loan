const Todo = ({index, todo, removeTodo, markCompleted})  => {

  const removeItem = () => {
    removeTodo(index);
  }

  const markCompletedFn = () => {
    markCompleted(index);
  }

  return (
    <div className="task">
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

export default Todo;
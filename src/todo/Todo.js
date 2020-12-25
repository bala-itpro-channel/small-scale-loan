const Todo = ({index, todo, removeTodo, markCompleted})  => {

  const removeItem = () => {
    removeTodo(index);
  }

  const markCompletedFn = () => {
    markCompleted(index);
  }

  return (
    <div className="task">
      <div>{index+1}</div>
      <div className={todo.isCompleted ? 'strike-through':''}>{todo.task}</div>
      <button onClick={markCompletedFn}>Done</button>
      <button onClick={removeItem}>X</button>
    </div>
  );
}

export default Todo;
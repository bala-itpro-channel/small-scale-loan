import React, { useState } from 'react';
import Todo from './Todo/Todo.js';
import './Todos.css';
import AddForm from './Add/AddForm.js';
var classNames = require('classnames');

function Todos() {
  const toDoList = [
    {
      task: 'Go to shopper drugmart',
      isCompleted: false
    },
    {
      task: 'Go to park',
      isCompleted: false
    },
    {
      task: 'Attend music class',
      isCompleted: false
    },
    {
      task: 'Go to dance class',
      isCompleted: false
    }
  ]

  const [todos, setTodos] = useState(toDoList);

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = task => {
    const newTodos = [...todos, {task, isCompleted: false}]
    setTodos(newTodos);
  };

  const markCompleted = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <section>
      <div className="todo-list">
        {
          todos.map((todo, index) => {
            return (
              <Todo key={index} index={index} todo={todo} 
                removeTodo={removeTodo}
                markCompleted={markCompleted}>
                {todo.task}
              </Todo>
            )
          })
        }
      </div>
      <AddForm addTodo={addTodo} />
    </section>
  );
}

export default Todos;
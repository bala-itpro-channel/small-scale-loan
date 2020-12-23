import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import  Todo from './Todo.js';

function App() {
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
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        Small scale loan
      </header>
      <main>
        {
          todos.map((todo, index) => {
            return (
              <Todo key={index} index={index} todo={todo} 
                removeTodo={removeTodo}
                markCompleted={markCompleted}
                >
                {todo.task}
              </Todo>
            )
          })
        }
      </main>
    </div>
  );
}

export default App;

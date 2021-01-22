import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo/Todo.js';
import './Todos.scss';
import AddForm from './Add/AddForm.js';
import * as Actions from './../Redux/Actions';
var classNames = require('classnames');

function Todos() {
  // useSelector Hook
  const todos = useSelector(state => state.todoReducer.todos);
  const user = useSelector(state => state.userReducer.user);

  // useDispatch Hook
  const dispatch = useDispatch();
  const markCompleted =  task => dispatch(Actions.todoEdit(task));
  const removeTodo = task => dispatch(Actions.todoDelete(task));
  const addTodo = task => dispatch(Actions.todoAdd(task));
  const todoSetdata = todos => dispatch(Actions.todoSetdata(todos));

  useEffect(() => {
    // Http call here to fetch data and set it in STORE
    todoSetdata(
      [
        {
          task: 'Go to shopper drugmartt',
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
    );
  }, []);

  return (
    <section>
      <div className="todo-list">
        {
          todos.map((todo, index) => {
            return (
              <Todo key={index} index={index} 
                todo={todo} 
                removeTodo={removeTodo}
                markCompleted={markCompleted}>
                {todo.task}
              </Todo>
            );
          })
        }
      </div>
      <AddForm addTodo={addTodo} />
    </section>
  );
}

export default Todos;

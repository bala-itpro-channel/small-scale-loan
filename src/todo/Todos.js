import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo/Todo.js';
import './Todos.scss';
import AddForm from './Add/AddForm.js';
import * as Actions from './../Redux/Actions';
import * as ActionTypes from './../Redux/ActionTypes'
var classNames = require('classnames');

function Todos({todos, user, todoEdit, todoAdd, todoDelete, todoSetdata}) {
  const removeTodo = task => {
    todoDelete(task);
  }

  const addTodo = task => {
    todoAdd(task);
  }

  const markCompleted = task => {
    todoEdit(task);
  }

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

const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
  user: state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
  todoEdit: task => dispatch(Actions.todoEdit(task)),
  todoDelete: task => dispatch(Actions.todoDelete(task)),
  todoAdd: task => dispatch(Actions.todoAdd(task)),
  todoSetdata: todos => dispatch(Actions.todoSetdata(todos))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
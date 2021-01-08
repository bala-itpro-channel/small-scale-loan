import React, { useState } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo/Todo.js';
import './Todos.scss';
import AddForm from './Add/AddForm.js';
import * as Actions from './../Redux/Actions';
import * as ActionTypes from './../Redux/ActionTypes'
var classNames = require('classnames');

function Todos({todos, todoEdit, todoAdd, todoDelete}) {
  const removeTodo = task => {
    // dispatch(Actions.todoDelete(task));
    todoDelete(task);
  }

  const addTodo = task => {
    // dispatch(Actions.todoAdd(task));
    todoAdd(task);
  }

  const markCompleted = task => {
    // dispatch(Actions.todoEdit(task));
    todoEdit(task);
  }

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
            )
          })
        }
      </div>
      <AddForm addTodo={addTodo} />
    </section>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  todoEdit: task => dispatch(Actions.todoEdit(task)),
  todoDelete: task => dispatch(Actions.todoDelete(task)),
  todoAdd: task => dispatch(Actions.todoAdd(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
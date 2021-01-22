import * as ActionTypes from '../ActionTypes';

export const todoAdd = task => ({
  type: ActionTypes.TODO_ADD_ITEM,
  payload: {
    task
  }
});

export const todoEdit = task => ({
  type: ActionTypes.TODO_EDIT_ITEM,
  payload: {
    task
  }
});

export const todoDelete = task => ({
  type: ActionTypes.TODO_DELETE_ITEM,
  payload: {
    task
  }
});

export const todoSetdata = (todos) => ({
  type: ActionTypes.TODO_SET_DATA,
  payload: { 
    todos 
  }
});

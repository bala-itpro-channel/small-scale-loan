import * as Actions from '../ActionTypes';

const initialState = {
  todos: []
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.TODO_SET_DATA: 
      return {
        ...state,
        todos: [
          ...action.payload.todos
        ]
      };
    case Actions.TODO_ADD_ITEM: 
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload.task,
            isCompleted: false
          }
        ]
      };
    case Actions.TODO_EDIT_ITEM: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.task === action.payload.task) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted
            }
          }
          return todo;
        })
      };
    }
    case Actions.TODO_DELETE_ITEM: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.task !== action.payload.task)
      };
    }
    default: 
      return state
  }
}
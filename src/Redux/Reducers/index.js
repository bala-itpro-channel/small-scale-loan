import * as Actions from '../ActionTypes';

const initialState = {
  todos: [
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
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
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
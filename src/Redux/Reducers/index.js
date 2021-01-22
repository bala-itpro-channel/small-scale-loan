import { combineReducers } from 'redux';
import todoReducer from './../Reducers/toDoReducer';
import userReducer from './../Reducers/userReducer';

export default combineReducers({
  todoReducer,
  userReducer
})

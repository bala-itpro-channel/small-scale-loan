import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './Redux/Reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Action Types
// Actions
// Reducers
// applyMiddleware(composeWithDevTools, thunkMiddleware)
const middleware = [ thunk ];
const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

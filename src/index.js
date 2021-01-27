import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import { ActivitiesReducer } from './pages/Activities';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './app/layout/App';

// Store setup
const middleware = [thunk];
const store = createStore(
  combineReducers({
    activitiesState: ActivitiesReducer,
  }),
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

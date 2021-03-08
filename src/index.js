import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './app/layout/App';
import { ActivitiesReducer } from './components/activities/reducer/ActivitiesReducer';
import { Router } from 'react-router-dom';
import { ScrollToTop } from './app/layout/ScrollToTop';
import { createBrowserHistory } from 'history';

// Store setup
const middleware = [thunk];
const store = createStore(
  combineReducers({
    activitiesState: ActivitiesReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

// Added history function so we can use all over the page
export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

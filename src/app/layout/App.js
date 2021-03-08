import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import FullViewActivity from '../../components/activities/details/FullViewActivity';
import NavigationBar from '../../components/NavigationBar';
import Activities from '../../pages/Activities';
import Home from '../../pages/Home';
import TestErrors from '../../pages/TestError';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Fragment>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavigationBar />
            <Route path='/activities'>
              <Activities />
            </Route>
            <Route path='/activity/:id'>
              <FullViewActivity />
            </Route>
            <Route path='/error'>
              <TestErrors />
            </Route>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;

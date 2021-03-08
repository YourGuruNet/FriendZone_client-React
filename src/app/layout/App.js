import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import FullViewActivity from '../../components/activities/details/FullViewActivity';
import NavigationBar from '../../components/NavigationBar';
import Activities from '../../pages/Activities';
import Home from '../../pages/Home';
import ErrorPage from '../../components/errors/ErrorPage';
import TestErrors from '../../components/errors/TestError';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Fragment>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={Home} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavigationBar />
            <Switch>
              <Route path='/activities' component={Activities} />
              <Route path='/activity/:id' component={FullViewActivity} />
              <Route path='/error' component={TestErrors} />
              <Route component={ErrorPage} />
            </Switch>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;

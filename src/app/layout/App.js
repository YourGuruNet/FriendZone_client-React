import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import FullViewActivity from '../../components/activities/details/FullViewActivity';
import NavigationBar from '../../components/NavigationBar';
import Activities from '../../pages/Activities';
import Home from '../../pages/Home';
import ErrorPage from '../../components/errors/ErrorPage';
import TestErrors from '../../components/errors/TestError';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import LoginForm from '../../components/authenticate/LoginForm';
import HelloFromUser from '../../components/HelloFromUser';
import { connect } from 'react-redux';
import {
  getUser,
  setAppLoaded,
} from '../../components/activities/reducer/ActivitiesActions';
import Loading from '../../components/Loading';
const App = ({ getUser, setAppLoaded, appLoaded }) => {
  //Check if the user token is in local storage
  useEffect(() => {
    const localToken = window.localStorage.getItem('login');
    if (localToken) {
      getUser().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }
  }, [getUser, setAppLoaded]);

  if (!appLoaded) return <Loading />;
  return (
    <Fragment>
      <ToastContainer position='bottom-right' />
      <Route exact path='/' component={Home} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <HelloFromUser />
            <NavigationBar />
            <Switch>
              <Route path='/activities' component={Activities} />
              <Route path='/activity/:id' component={FullViewActivity} />
              <Route path='/error' component={TestErrors} />
              <Route path='/login' component={LoginForm} />
              <Route component={ErrorPage} />
            </Switch>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

const mapStateToProps = ({ activitiesState: { appLoaded } }) => {
  return { appLoaded };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    setAppLoaded: () => dispatch(setAppLoaded()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

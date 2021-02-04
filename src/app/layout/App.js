import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import FullViewActivity from '../../components/activities/FullViewActivity';
import NavigationBar from '../../components/NavigationBar';
import Activities from '../../pages/Activities';
import Home from '../../pages/Home';

const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/activities'>
          <Activities />
        </Route>
        <Route path='/activity/:id'>
          <FullViewActivity />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;

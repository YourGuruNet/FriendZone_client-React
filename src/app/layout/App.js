import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import FullViewActivity from '../../components/activities/details/FullViewActivity';

import NavigationBar from '../../components/NavigationBar';
import Activities from '../../pages/Activities';
import Home from '../../pages/Home';

const App = () => {
  return (
    <Fragment>
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
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;

import React, { Fragment } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Activities from '../../pages/Activities';

const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Activities />
    </Fragment>
  );
};

export default App;

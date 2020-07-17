import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import './css/app.scss';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
};

export default hot(module)(App);

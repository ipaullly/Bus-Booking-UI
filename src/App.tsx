import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './utils/history';
import HomePage from './pages/home-page/home-page.component';
import AvailableTrips from './pages/available-trips/available-trips.components';

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/' component={AvailableTrips} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

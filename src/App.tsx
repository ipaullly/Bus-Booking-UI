import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './utils/history';
import HomePage from './pages/home-page/home-page.component';
import AvailableTrips from './pages/available-trips/available-trips.components';
import NavBar from './components/navigation/navbar.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/trips' component={AvailableTrips} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

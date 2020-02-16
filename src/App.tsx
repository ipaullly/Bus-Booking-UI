import React, { useReducer } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import AppContext from './context/appContext';
import appReducer from './context/appReducer';

import history from './utils/history';
import { ADD_OPTION } from './context/types';
import { IOptions } from './utils/interfaces';
import Trips from './JSON/trips.json';

import HomePage from './pages/home-page/home-page.component';
import AvailableTrips from './pages/available-trips/available-trips.components';
import NavBar from './components/navigation/navbar.component';
import Footer from './components/footer/footer.component';

const App = () => {

  const initialState = {
    selectedOptions: [
      {
        from: 'Nairobi',
        to: 'kisumu',
        date: 25-3-2020,
      },
      {
        from: 'Nairobi',
        to: 'kisumu',
        date: 25-3-2020,
      }
    ],
    filteredTrips: [Trips.availableTrips[0]],
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const addOption = (option: IOptions) => {
    dispatch({
      type: ADD_OPTION,
      payload: option,
    })
  }

  return (
    <Router history={history}>
      <div className="App">
        <AppContext.Provider
          value={{
            selectedOptions: state.selectedOptions,
            filteredTrips: state.filteredTrips,
            addOption,
          }}
        >
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/trips' component={AvailableTrips} />
          </Switch>
          <Footer />
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;

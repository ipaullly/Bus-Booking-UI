import React, { Component } from 'react';
import AvailableTrip from '../../components/available-trip/available-trip.component';

import './available-trips.styles.css';
import Trips from 'src/JSON/trips.json';
import Cities from 'src/JSON/cities.json';
import CustomButton from 'src/components/button/button.component';

interface AvailableState {
  key: number
}

class AvailableTrips extends Component<{}, AvailableState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      key: 0,
    }
  }

  render() {
    return(
      <div className="available-trips-page">
        <div className="side-search-bar">
        <h3 className="label-title">search for more trips</h3>
        <div className="mini-search-fields">
          <select className="mini-form-control">
            <option>---travelling-from---</option>
            {
              Cities.cities && Cities.cities.map((e, key) => {
              return <option key={key} value={e.Key}>{e.Value}</option>;
              })
            }
          </select>
          <select className="mini-form-control">
            <option>---travelling-to---</option>
            {
              Cities.cities && Cities.cities.map((e, key) => {
              return <option key={key} value={e.Key}>{e.Value}</option>;
              })
            }
          </select>
          <input type="date" placeholder="depature date" className="mini-form-control"/>
          <CustomButton type='submit'>Search</CustomButton>
        </div>
        </div>
        <div className="available-trips">
          { 
            Trips.availableTrips && 
            Trips.availableTrips.map((e, key) => {
              return <AvailableTrip key={key} value={e.key} {...e}/>;
            })
          }
        </div>
      </div>
    );
  }
}

export default AvailableTrips;
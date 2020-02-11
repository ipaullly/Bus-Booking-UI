import React, { Component } from 'react';
import AvailableTrip from '../../components/available-trip/available-trip.component';

import './available-trips.styles.css';
import Trips from 'src/JSON/trips.json';

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
        <div className="side-search-bar"></div>
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
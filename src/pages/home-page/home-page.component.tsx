import React, { Component } from 'react';
import './home.styles.css';
import CustomButton from 'src/components/button/button.component';
import Cities from 'src/JSON/cities.json';

interface SearchState {
  travellingFrom: string,
  travellingTo: string,
  departureDate: number
}

class HomePage extends Component<{}, SearchState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      travellingFrom: '',
      travellingTo: '',
      departureDate: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (field: string) => (e: any) => {
    const value = e.currentTarget.value;
    this.setState({ [field]: value } as SearchState);
  }

  render() {
    return(
      <div className="container">
        <h2 className="header">Search for Available Buses</h2>
        <div className="search-fields">
          <select className="form-control">
            <option>---travelling-from---</option>
            {
              Cities.cities && Cities.cities.map((e, key) => {
              return <option key={key} value={e.Key}>{e.Value}</option>;
              })
            }
          </select>
          <select className="form-control">
            <option>---travelling-to---</option>
            {
              Cities.cities && Cities.cities.map((e, key) => {
              return <option key={key} value={e.Key}>{e.Value}</option>;
              })
            }
          </select>
          <input type="date" placeholder="depature date" className="form-control date-time"/>
          <CustomButton type='submit'>Search Trips</CustomButton>
        </div>
        <div className="mpesa">
          You can pay via M-pesa
        </div>
      </div>
    );
  }

}

export default HomePage;

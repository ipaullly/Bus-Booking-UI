import React, { Component } from 'react';
import './home.styles.css';
import CustomButton from 'src/components/button/button.component';
import Cities from 'src/JSON/cities.json';
import { Link } from 'react-router-dom';

interface SearchState {
  obj: {} | null;
}

class HomePage extends Component<{}, SearchState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      obj: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: any) => {
    this.setState({ obj: Cities.cities[e.target.value] });
    console.log(this.state);
    
  }

  render() {
    return(
      <div className="container">
        <h2 className="header">Search for Available Buses</h2>
        <p className="intro">Find the most convenient and affordable bus fares here!</p>
        <div className="search-fields">
          <select className="form-control" onChange={this.handleChange}>
            <option>---travelling-from---</option>
            {
              Cities.cities && Cities.cities.map((e, key) => {
              return <option key={key} value={key}>{e.Value}</option>;
              })
            }
          </select>
          <select className="form-control"  onChange={this.handleChange}>
            <option>---travelling-to---</option>
            {
              Cities.cities && Cities.cities.map((e, key) => {
              return <option key={key} value={e.Key}>{e.Value}</option>;
              })
            }
          </select>
          <input type="date" placeholder="depature date" className="form-control date-time"/>
          <CustomButton type='submit'><Link to='/trips'>Search Trips</Link></CustomButton>
        </div>
        <div className="mpesa">
          You can pay via M-pesa
        </div>
      </div>
    );
  }

}

export default HomePage;

import React, { Component } from 'react';
import CustomButton from 'src/components/button/button.component';
import Cities from 'src/JSON/cities.json';
import { Link } from 'react-router-dom';

import './home.styles.less';

interface Options {
  from: string;
  to: string;
}

interface SearchState {
  obj: Options | null;
}

const HomePage: React.FC<{}> = () => {
  

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    //
  }
  return(
    <div className="container">
      <h2 className="header">Search for Available Buses</h2>
      <hr/>
      <p className="intro">Find the most convenient and affordable bus fares here!</p>
      <div className="search-fields">
        <select className="form-control" onBlur={handleChange}>
          <option>---travelling-from---</option>
          {
            Cities.cities && Cities.cities.map((e, key) => {
            return <option key={key} value={e.Key}>{e.Value}</option>;
            })
          }
        </select>
        <select className="form-control" onBlur={handleChange}>
          <option>---travelling-to---</option>
          {
            Cities.cities && Cities.cities.map((e, key) => {
            return <option key={key} value={e.Key}>{e.Value}</option>;
            })
          }
        </select>
        <input type="date" placeholder="depature date" className="form-control date-time"/>
        <CustomButton type='submit'><Link to='/trips' className="link">Search Trips</Link></CustomButton>
      </div>
      <div className="mpesa">
        You can pay via M-pesa
      </div>
    </div>
  );
}

export default HomePage;

import React, { Component } from 'react';
import './home.styles.css';
import FormInput from 'src/components/input-field/input-field.component';
import CustomButton from 'src/components/button/button.component';

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
    const { travellingFrom, travellingTo, departureDate } = this.state;
    return(
      <div className="container">
        <h2 className="header">Search for Available Buses</h2>
        <div className="search-fields">
          <FormInput 
            name="travellingFrom"
            type="text"
            value={travellingFrom}
            handleChange={this.handleChange('travellingFrom')}
            label="Travelling From"
          />
          <FormInput 
            name="travellingTo"
            type="text"
            value={travellingTo}
            handleChange={this.handleChange('travellingTo')}
            label="Destination"
          />
          <FormInput 
            name="departureDate"
            type="date"
            value={departureDate}
            handleChange={this.handleChange('departureDate')}
            label="Date of Departure"
          />
          <CustomButton type='submit'>Search Trips</CustomButton>
        </div>
      </div>
    );
  }

}

export default HomePage;

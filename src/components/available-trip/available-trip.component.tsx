import React from 'react';

import CustomButton from '../button/button.component';

import './available-trip.styles.less';

interface ITripProps{
    busCompany: string;
    from: string;
    to: string;
    price: string;
    depatureTime: string;
    travelDate: string;
    availableSeats: number;
    boardingPoint: string;
    key: number;
    value?: number;
}

interface AvailableTripState{
  selectedTrip: number,
}

class AvailableTrip extends React.Component<ITripProps, AvailableTripState>{
  constructor(props: ITripProps){
    super(props);
    this.state = {
      selectedTrip: 0
    }
  }

  render(){
    const { from, to, busCompany, depatureTime, travelDate, boardingPoint, price } = this.props;
    return(
      <div className="trip-card">
        <div className="aside">
          <img src="https://picsum.photos/200/180" alt="avatar"/>
        </div>
        <div className="center">
          <div className="top">
            <span>{from} - </span>
            <span>{to}  </span>
            <span>{busCompany}</span>
          </div>
          <div className="low">
            <div className="low-left">
              <span className="label-title">Departure time:</span>
              <span>{depatureTime}</span>
            </div>
            <div className="low-left">
              <span className="label-title">Date of Travel: </span>
              <span>{travelDate}</span>
            </div>
            <div className="low-left">
              <span className="label-title">boarding Point: </span>
              <span>{boardingPoint}</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <span className="label-title">Price of Ticket</span>
            <span>{price}</span>
          </div>
          <CustomButton type="submit">Book Now</CustomButton>
        </div>
      </div>
    );
  }
}

export default AvailableTrip;

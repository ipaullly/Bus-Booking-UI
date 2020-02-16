export interface IOptions{
  from: string;
  to: string;
  date: number;
}

export interface IFilteredTrips{
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

export interface IOptionsState{
  selectedOptions: IOptions[];
}

export interface IOptionAction{
  type: string;
  payload: IOptions;
}
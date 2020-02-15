import { createContext } from 'react';

interface IOptions{
  from: string;
  to: string;
  date: number;
}

interface IFilteredTrips{
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

interface IAppContext{
  selectedOptions: IOptions[];
  filteredTrips: IFilteredTrips[];
  addOption: (option: string) => void;
}

const AppContext = createContext<IAppContext>({
  selectedOptions: [],
  filteredTrips: [],
  addOption: (option) => {},
});

export default AppContext;
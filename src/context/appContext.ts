import { createContext } from 'react';
import { IOptions, IFilteredTrips } from '../utils/interfaces';

interface IAppContext{
  selectedOptions: IOptions[];
  filteredTrips: IFilteredTrips[];
  addOption: (option: string) => void;
}

const AppContext = createContext<IAppContext>({
  selectedOptions: [],
  filteredTrips: [],
  addOption: (option: string) => {},
});

export default AppContext;

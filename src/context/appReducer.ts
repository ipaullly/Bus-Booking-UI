import { ADD_OPTION } from './types';
import { IOptions, IOptionsState, IOptionAction } from '../utils/interfaces';

const addOption = (option: IOptions, state: IOptionsState) => {
  const newOptions = [...state.selectedOptions, option];
  return {
    ...state,
    selectedOptions: newOptions
  }
};

export default (state: IOptionsState, action: IOptionAction) => {
  switch (action.type) {
    case ADD_OPTION:
      return addOption(action.payload, state);
    default:
      return state;
  }
}
import {
  AllBeaconsAction,
  GET_ALL_BEACONS_REQUEST,
  GET_ALL_BEACONS_SUCCESS,
  GET_ALL_BEACONS_FAILURE
} from '../types';
import { BeaconDetails } from 'constants/types';

type State = {
  data: BeaconDetails[];
  isLoading: boolean;
  error: Error | null;
};

const initialState: State = {
  data: [],
  isLoading: false,
  error: null
};

export default (
  state: State = initialState,
  action: AllBeaconsAction
): State => {
  switch (action.type) {
    case GET_ALL_BEACONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case GET_ALL_BEACONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case GET_ALL_BEACONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

import { BeaconDetails } from 'constants/types';
import {
  PersonalBeaconAction,
  GET_PERSONAL_BEACON_REQUEST,
  GET_PERSONAL_BEACON_SUCCESS,
  GET_PERSONAL_BEACON_FAILURE
} from '../types';

type State = {
  data: BeaconDetails | null;
  isLoading: boolean;
  error: Error | null;
};

const initialState: State = {
  data: null,
  isLoading: false,
  error: null
};

export default (
  state: State = initialState,
  action: PersonalBeaconAction
): State => {
  switch (action.type) {
    case GET_PERSONAL_BEACON_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case GET_PERSONAL_BEACON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    case GET_PERSONAL_BEACON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

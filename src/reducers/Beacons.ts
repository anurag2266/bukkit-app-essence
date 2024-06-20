import * as ACTIONS from '../actions';
import { BeaconDetails } from 'constants/types';

export type BeaconsState = {
  data: BeaconDetails[];
  loading: boolean;
  loaded: boolean;
};

const newState: BeaconsState = {
  data: [],
  loading: false,
  loaded: false
};

export function Beacons(state: BeaconsState, action: any) {
  switch (action.type) {
    case ACTIONS.LISTEN_BEACONS: {
      return {
        ...state,
        loading: true
      };
    }
    case ACTIONS.LISTEN_BEACONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case ACTIONS.BEACONS_CHANGED: {
      return {
        ...state,
        data: action.payload
      };
    }
    case ACTIONS.LISTEN_BEACONS_FAIL: {
      return {
        ...state,
        data: [],
        loading: true,
        loaded: false
      };
    }

    default:
      return state || newState;
  }
}

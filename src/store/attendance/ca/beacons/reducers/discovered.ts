import {
  UpdateDiscoveredBeaconsAction,
  UPDATE_DISCOVERED_BEACONS
} from '../types';

type State = {
  ids: number[];
};

const initialState: State = {
  ids: []
};

export default (
  state: State = initialState,
  action: UpdateDiscoveredBeaconsAction
): State => {
  switch (action.type) {
    case UPDATE_DISCOVERED_BEACONS:
      return {
        ...state,
        ids: action.payload
      };
    default:
      return state;
  }
};

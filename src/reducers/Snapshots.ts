import * as ACTIONS from '../actions';

export type Snapshots = {
  data: any[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
};

const newState: Snapshots = {
  data: [],
  loading: false,
  loaded: false,
  error: false
};

export function Snapshots(state: Snapshots, action: any) {
  switch (action.type) {
    case ACTIONS.GET_SNAPSHOT: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ACTIONS.GET_SNAPSHOT_SUCCESS: {
      return {
        ...state,
        data: action.data.data,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.GET_SNAPSHOT_FAIL:
    case ACTIONS.DELETE_SNAPSHOT_FAIL:
    case ACTIONS.UPDATE_SNAPSHOT_FAIL:
    case ACTIONS.DELETE_SINGLE_SNAPSHOT_FAIL: {
      return {
        ...state,
        data: [],
        loading: false,
        loaded: false,
        error: true
      };
    }

    default:
      return state || newState;
  }
}

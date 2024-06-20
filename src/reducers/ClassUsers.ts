import * as ACTIONS from '../actions';

export type ClassUsers = {
  data: any[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
};

const newState: ClassUsers = {
  data: [],
  loading: false,
  loaded: false,
  error: false
};

export function ClassUsers(state: ClassUsers, action: any) {
  switch (action.type) {
    case ACTIONS.GET_APPROVAL_LIST: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ACTIONS.GET_APPROVAL_LIST_SUCCESS: {
      return {
        ...state,
        data: action.data.data,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.GET_APPROVAL_LIST_FAIL: {
      return {
        ...state,
        data: [],
        loading: false,
        loaded: true,
        error: true
      };
    }

    default:
      return state || newState;
  }
}

import * as ACTIONS from '../actions';

export type User = {
  data: any;
  loading: boolean;
  loaded: boolean;
};

const newState: User = {
  data: null,
  loading: false,
  loaded: false
};

export function User(state: User, action: any) {
  switch (action.type) {
    case ACTIONS.USER_ADD_USER:
    case ACTIONS.USER_LOAD_USER:
    case ACTIONS.USER_STORE_USER:
    case ACTIONS.USER_CLEAR_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case ACTIONS.USER_LOAD_USER_SUCCESS:
    case ACTIONS.USER_STORE_USER_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true
      };
    }
    case ACTIONS.USER_CLEAR_USER_SUCCESS: {
      return {
        ...state,
        data: null,
        loading: false,
        loaded: true
      };
    }
    case ACTIONS.USER_ADD_USER_FAIL:
    case ACTIONS.USER_LOAD_USER_FAIL:
    case ACTIONS.USER_STORE_USER_FAIL:
    case ACTIONS.USER_CLEAR_USER_FAIL: {
      return {
        ...state,
        data: null,
        loading: false,
        loaded: false,
        error: true
      };
    }

    default:
      return state || newState;
  }
}

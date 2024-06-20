import * as ACTIONS from '../actions';

export type ClassesState = {
  data: any[];
  attendance: {};
  loading: boolean;
  loaded: boolean;
  error: boolean;
};

const newState: ClassesState = {
  data: [],
  attendance: {},
  loading: false,
  loaded: false,
  error: false
};

export function Classes(state: ClassesState, action: any) {
  switch (action.type) {
    case ACTIONS.GET_CLASSES: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ACTIONS.GET_CLASSES_SUCCESS: {
      return {
        ...state,
        data: action.data.data,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.GET_CLASSES_FAIL: {
      return {
        ...state,
        data: [],
        loading: false,
        loaded: false,
        error: true
      };
    }

    case ACTIONS.CHECKIN: {
      return {
        ...state,
        attendance: {},
        loading: true,
        error: false
      };
    }
    case ACTIONS.CHECKIN_SUCCESS: {
      return {
        ...state,
        attendance: action.data.data,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.CHECKIN_FAIL: {
      return {
        ...state,
        data: [],
        loading: false,
        loaded: false,
        error: true
      };
    }

    case ACTIONS.CHECKOUT: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ACTIONS.CHECKOUT_SUCCESS: {
      return {
        ...state,
        attendance: {},
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.CHECKOUT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };
    }

    case ACTIONS.REPLACE_CLASS: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ACTIONS.REPLACE_CLASS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.REPLACE_CLASS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };
    }

    default:
      return state || newState;
  }
}

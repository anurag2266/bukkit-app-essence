import * as ACTIONS from '../actions';

export type Attendance = {
  data: any[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
};

const newState: Attendance = {
  data: [],
  loading: false,
  loaded: false,
  error: false
};

export function Attendance(state: Attendance, action: any) {
  switch (action.type) {
    case ACTIONS.GET_ATTENDANCE: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ACTIONS.GET_ATTENDANCE_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.GET_ATTENDANCE_FAIL: {
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

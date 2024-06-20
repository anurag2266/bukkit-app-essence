import { LessonsScheduleItem } from 'constants/types';
import {
  ScheduleAction,
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS,
  GET_SCHEDULE_FAILURE
} from '../types';

type State = {
  data: LessonsScheduleItem[];
  isLoading: boolean;
  isLoaded: boolean;
  error: Error | null;
};

const initialState: State = {
  data: [],
  isLoading: false,
  isLoaded: false,
  error: null
};

export default (state: State = initialState, action: ScheduleAction): State => {
  switch (action.type) {
    case GET_SCHEDULE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_SCHEDULE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case GET_SCHEDULE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

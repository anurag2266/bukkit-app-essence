import { DayLessonsDetails } from 'constants/types';
import {
  HistoryAction,
  GET_HISTORY_REQUEST,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAILURE
} from '../types';

type State = {
  data: DayLessonsDetails[];
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

export default (state: State = initialState, action: HistoryAction): State => {
  switch (action.type) {
    case GET_HISTORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case GET_HISTORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

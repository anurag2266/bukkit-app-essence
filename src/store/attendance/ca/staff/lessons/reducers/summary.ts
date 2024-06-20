import { StaffLessonsAttendanceSummary } from 'constants/types';
import {
  GET_SUMMARY_REQUEST,
  GET_SUMMARY_SUCCESS,
  GET_SUMMARY_FAILURE,
  SummaryAction
} from '../types';

type State = {
  data: StaffLessonsAttendanceSummary | null;
  isLoading: boolean;
  isLoaded: boolean;
  error: Error | null;
};

const initialState: State = {
  data: null,
  isLoading: false,
  isLoaded: false,
  error: null
};

export default (state: State = initialState, action: SummaryAction): State => {
  switch (action.type) {
    case GET_SUMMARY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_SUMMARY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case GET_SUMMARY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

import { ApprovalsStudent } from 'constants/types';
import {
  StudentsAction,
  GET_STUDENTS_REQUEST,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_FAILURE
} from '../types';

type State = {
  data: ApprovalsStudent[];
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

export default (state: State = initialState, action: StudentsAction): State => {
  switch (action.type) {
    case GET_STUDENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case GET_STUDENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

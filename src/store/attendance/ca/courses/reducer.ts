import {
  CoursesAction,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE
} from './types';
import { Course } from 'constants/types';

type State = {
  data: Course[];
  isLoading: boolean;
  error: Error | null;
  isLoaded: boolean;
};

const initialState: State = {
  data: [],
  isLoading: false,
  isLoaded: false,
  error: null
};

export default (state: State = initialState, action: CoursesAction): State => {
  switch (action.type) {
    case GET_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        isLoaded: false
      };

    case GET_COURSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case GET_COURSES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

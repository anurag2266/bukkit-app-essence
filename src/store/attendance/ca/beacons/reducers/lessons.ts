import { LessonDetails } from 'constants/types';
import {
  GET_LESSONS_REQUEST,
  LessonsAction,
  GET_LESSONS_SUCCESS,
  GET_LESSONS_FAILURE
} from '../types';

type State = {
  beaconIds: number[];
  data: LessonDetails[];
  isLoading: boolean;
  error: Error | null;
};

const initialState: State = {
  beaconIds: [],
  data: [],
  isLoading: false,
  error: null
};

export default (state: State = initialState, action: LessonsAction): State => {
  switch (action.type) {
    case GET_LESSONS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
        beaconIds: action.payload
      };
    case GET_LESSONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case GET_LESSONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

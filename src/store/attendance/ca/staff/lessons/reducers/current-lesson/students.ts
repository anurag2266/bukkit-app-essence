import { StudentAttendanceListItemDetails } from 'constants/types';
import {
  CurrentLessonAction,
  GET_CURRENT_LESSON_STUDENTS_REQUEST,
  GET_CURRENT_LESSON_STUDENTS_FAILURE,
  GET_CURRENT_LESSON_STUDENTS_SUCCESS,
  RESET_CURRENT_LESSON
} from '../../types';

type State = {
  data: StudentAttendanceListItemDetails[];
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

export default (
  state: State = initialState,
  action: CurrentLessonAction
): State => {
  switch (action.type) {
    case GET_CURRENT_LESSON_STUDENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        error: null
      };
    case GET_CURRENT_LESSON_STUDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case GET_CURRENT_LESSON_STUDENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case RESET_CURRENT_LESSON:
      return initialState;
    default:
      return state;
  }
};

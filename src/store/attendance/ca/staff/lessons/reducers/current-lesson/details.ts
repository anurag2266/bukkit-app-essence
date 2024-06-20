import { LessonDetails } from 'constants/types';
import {
  GET_CURRENT_LESSON_DETAILS_REQUEST,
  GET_CURRENT_LESSON_DETAILS_SUCCESS,
  GET_CURRENT_LESSON_DETAILS_FAILURE,
  CurrentLessonAction,
  RESET_CURRENT_LESSON,
  STOP_CURRENT_LESSON_SUCCESS,
  SEND_STUDENTS_REMINDER_REQUEST,
  SEND_STUDENTS_REMINDER_SUCCESS
} from '../../types';

type State = {
  data: LessonDetails | null;
  isLoading: boolean;
  isLoaded: boolean;
  error: Error | null;

  isStopped: boolean;
  isReminderSent: boolean;
};

const initialState: State = {
  data: null,
  isLoading: false,
  isLoaded: false,
  error: null,
  isStopped: false,
  isReminderSent: false
};

export default (
  state: State = initialState,
  action: CurrentLessonAction
): State => {
  switch (action.type) {
    case GET_CURRENT_LESSON_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_CURRENT_LESSON_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case GET_CURRENT_LESSON_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    // @TODO:  case STOP_CURRENT_LESSON_REQUEST
    case STOP_CURRENT_LESSON_SUCCESS:
      return {
        ...state,
        isStopped: true
      };
    // @TODO:  case STOP_CURRENT_LESSON_FAILURE

    case SEND_STUDENTS_REMINDER_REQUEST:
      return {
        ...state,
        isReminderSent: false
      };
    case SEND_STUDENTS_REMINDER_SUCCESS:
      return {
        ...state,
        isReminderSent: true
      };
    // @TODO:  case SEND_STUDENTS_REMINDER_FAILURE
    case RESET_CURRENT_LESSON:
      return initialState;
    default:
      return state;
  }
};

import {
  CurrentLessonAction,
  CHECK_ONLINE_ATTENDANCE_REQUEST,
  CHECK_ONLINE_ATTENDANCE_SUCCESS,
  CHECK_ONLINE_ATTENDANCE_FAILURE,
  RESET_CURRENT_LESSON
} from '../../types';
import { LessonOnlineAttendanceCheckResult } from 'models/Attendance';

type State = {
  data: LessonOnlineAttendanceCheckResult | null;
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

export default (
  state: State = initialState,
  action: CurrentLessonAction
): State => {
  switch (action.type) {
    case CHECK_ONLINE_ATTENDANCE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        error: null
      };
    case CHECK_ONLINE_ATTENDANCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload.result
      };
    case CHECK_ONLINE_ATTENDANCE_FAILURE:
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

import {
  LessonAction,
  CREATE_LESSON_REQUEST,
  CREATE_LESSON_SUCCESS,
  CREATE_LESSON_FAILURE,
  CREATE_LESSON_RESET
} from '../types';

type State = {
  isLoading: boolean;
  isCreated: boolean;
  error: Error | null;
};

const initialState: State = {
  isLoading: false,
  isCreated: false,
  error: null
};

export default (state: State = initialState, action: LessonAction): State => {
  switch (action.type) {
    case CREATE_LESSON_REQUEST:
      return {
        ...state,
        isLoading: true,
        isCreated: false,
        error: null
      };
    case CREATE_LESSON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCreated: true
      };
    case CREATE_LESSON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case CREATE_LESSON_RESET:
      return initialState;
    default:
      return state;
  }
};

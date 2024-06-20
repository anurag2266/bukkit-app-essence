import {
  GET_COURSES_REQUEST,
  GetCoursesAction,
  GetCoursesSuccessAction,
  GET_COURSES_SUCCESS,
  GetCoursesFailureAction,
  GET_COURSES_FAILURE
} from './types';
import { Course } from 'constants/types';

export const getCourses = (): GetCoursesAction => ({
  type: GET_COURSES_REQUEST
});

export const getCoursesSuccess = (
  courses: Course[]
): GetCoursesSuccessAction => ({
  type: GET_COURSES_SUCCESS,
  payload: courses
});

export const getCoursesFailure = (error: Error): GetCoursesFailureAction => ({
  type: GET_COURSES_FAILURE,
  error
});

import { Course } from 'constants/types';

export const GET_COURSES_REQUEST = '@attendance/ca/courses/request';
export const GET_COURSES_SUCCESS = '@attendance/ca/courses/success';
export const GET_COURSES_FAILURE = '@attendance/ca/courses/failure';

export type GetCoursesAction = {
  type: typeof GET_COURSES_REQUEST;
};

export type GetCoursesSuccessAction = {
  type: typeof GET_COURSES_SUCCESS;
  payload: Course[];
};

export type GetCoursesFailureAction = {
  type: typeof GET_COURSES_FAILURE;
  error: Error;
};

export type CoursesAction =
  | GetCoursesAction
  | GetCoursesSuccessAction
  | GetCoursesFailureAction;

import {
  GetStudentsAction,
  GetStudentsSuccessAction,
  GetStudentsFailureAction,
  GET_STUDENTS_REQUEST,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_FAILURE
} from './types';
import { ApprovalsStudent } from 'constants/types';

export const getStudents = (): GetStudentsAction => ({
  type: GET_STUDENTS_REQUEST
});

export const getStudentsSuccess = (
  students: ApprovalsStudent[]
): GetStudentsSuccessAction => ({
  type: GET_STUDENTS_SUCCESS,
  payload: students
});

export const getStudentsFailure = (error: Error): GetStudentsFailureAction => ({
  type: GET_STUDENTS_FAILURE,
  error
});

import { ApprovalsStudent } from 'constants/types';

export const GET_STUDENTS_REQUEST =
  '@attendance/ca/staff/approvals/get-students-request';
export const GET_STUDENTS_SUCCESS =
  '@attendance/ca/staff/approvals/get-students-success';
export const GET_STUDENTS_FAILURE =
  '@attendance/ca/staff/approvals/get-students-failure';

export type GetStudentsAction = {
  type: typeof GET_STUDENTS_REQUEST;
};
export type GetStudentsSuccessAction = {
  type: typeof GET_STUDENTS_SUCCESS;
  payload: ApprovalsStudent[];
};

export type GetStudentsFailureAction = {
  type: typeof GET_STUDENTS_FAILURE;
  error: Error;
};

export type StudentsAction =
  | GetStudentsAction
  | GetStudentsSuccessAction
  | GetStudentsFailureAction;
